import { useEffect } from "react";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

function ProjectSelectionCanvas(props) {
  const canvasId = props.canvasId;
  const numberOfProjectPages = props.numberOfProjectPages;

  // Camera constants
  const FOV = 50;
  const NEAR = 1;
  const FAR = 1000;

  // THREE JS code goes in here
  useEffect(() => {
    const scene = new THREE.Scene();

    // making a basic camera
    const camera = new THREE.PerspectiveCamera(
      FOV,
      window.innerWidth / window.innerHeight,
      NEAR,
      FAR
    );

    let activeTweens = [];
    const originalY = 0;
    function animateBoxSelection(selectedBox) {
      selectedBox.isSelectAnimationOn = true;

      const movementUpTween = new TWEEN.Tween({
        y: originalY,
      })
        .to(
          {
            y: originalY + 0.2,
          },
          2000
        )
        .onUpdate((coord) => {
          selectedBox.position.y = coord.y;
        })
        .easing(TWEEN.Easing.Quadratic.Out);

      const rotationTween = new TWEEN.Tween({ yRotation: 0 })
        .to({ yRotation: Math.PI * 4 }, 3000)
        .onUpdate((coords) => {
          selectedBox.rotation.y = coords.yRotation;
        })
        .easing(TWEEN.Easing.Quadratic.Out);

      const movemenDownTween = new TWEEN.Tween({ y: originalY + 0.2 })
        .to({ y: originalY }, 1000)
        .onUpdate((coords) => {
          selectedBox.position.y = coords.y;
        })
        .onComplete(() => {
          selectedBox.isSelectAnimationOn = false;
        });

      movementUpTween.chain(movemenDownTween);
      movementUpTween.start();
      rotationTween.start();

      activeTweens.push(movementUpTween);
      activeTweens.push(movemenDownTween);
      activeTweens.push(rotationTween);
    }

    function animateBoxDeSelection(deselectedBox) {
      deselectedBox.isDeselected = true;

      function calculateRotationAngle(currentRotation) {
        const fullPI = Math.floor(currentRotation, Math.PI);
        if (fullPI % 2 == 0) {
          return (fullPI + 2) * Math.PI;
        } else {
          return (fullPI + 1) * Math.PI;
        }
      }

      const movemenDownTween = new TWEEN.Tween({ y: deselectedBox.position.y })
        .to({ y: originalY }, 1000)
        .onUpdate((coord) => {
          deselectedBox.position.y = coord.y;
        });
      const rotateBackTween = new TWEEN.Tween({
        yRotation: deselectedBox.rotation.y,
      })
        .to(
          { yRotation: calculateRotationAngle(deselectedBox.rotation.y) },
          1000
        )
        .onUpdate((rotation) => {
          deselectedBox.rotation.y = rotation.yRotation;
        })
        .onComplete(() => {
          deselectedBox.isDeselected = false;
        });

      movemenDownTween.start();
      rotateBackTween.start();
    }

    const projectBoxes = [];
    let selectedBoxId = -1;

    const deselectColour = 0xffffff;
    const selectColour = 0xff005b;

    // Copied from https://www.youtube.com/watch?v=CbUhot3K-gc
    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    // This function will detect which objects does user's cursor point at and will turn them red.
    function changeColourOnHover(event) {
      // calculate pointer position in normalised device coordinates
      // (-1 to +1) for both components
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);

      // setting colour of the boxes to red and white when needed
      const intersects = raycaster.intersectObjects(projectBoxes);
      if (intersects.length > 0) {
        if (selectedBoxId != intersects[0].object.projectId) {
          // If new box is selected
          if (selectedBoxId != -1) {
            projectBoxes[selectedBoxId].material.color.set(deselectColour); // deselecting a box
            if (projectBoxes[selectedBoxId].isSelectAnimationOn) {
              activeTweens.map((x) => x.stop());
              projectBoxes[selectedBoxId].isSelectAnimationOn = false;
              animateBoxDeSelection(projectBoxes[selectedBoxId]);
            }
            // animateBoxDeSelection(projectBoxes[selectedBoxId]);
          }
          intersects[0].object.material.color.set(selectColour); // selecting new box
          selectedBoxId = intersects[0].object.projectId;

          animateBoxSelection(projectBoxes[selectedBoxId]);
        }
      } else {
        if (selectedBoxId != -1) {
          projectBoxes[selectedBoxId].material.color.set(deselectColour); // deselecting a box
          if (projectBoxes[selectedBoxId].isSelectAnimationOn) {
            activeTweens.map((x) => x.stop());
            projectBoxes[selectedBoxId].isSelectAnimationOn = false;
            animateBoxDeSelection(projectBoxes[selectedBoxId]);
          }
          // animateBoxDeSelection(projectBoxes[selectedBoxId]);
          selectedBoxId = -1;
        }
      }

      console.log(selectedBoxId);
    }

    // Setting up a canvas and a renderer
    const canvas = document.getElementById(canvasId); // Canvas where we draw the scene on the user's screen

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Objects
    // Sample lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);
    const spotLight = new THREE.PointLight(0xffffff, 1);
    scene.add(spotLight);

    // Boxes that represent the projects

    // Creating the boxes
    for (let i = 0; i < numberOfProjectPages; i++) {
      const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
      const boxMaterial = new THREE.MeshStandardMaterial();
      const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
      boxMesh.position.z = -2;
      boxMesh.position.x = 0.6 - i * 1.2;
      boxMesh.projectId = i;
      projectBoxes.push(boxMesh);
    }

    // Adding the boxes onto a scene
    for (let i = 0; i < numberOfProjectPages; i++) {
      scene.add(projectBoxes[i]);
    }

    canvas.addEventListener("mousemove", changeColourOnHover);

    // animate loop
    const animate = (time) => {
      if (props.startAnimate) {
        // TODO: Add curtains animation into here
      }

      TWEEN.update(time);

      spotLight.rotation.y += 0.02;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, [props.startAnimate]);

  return <canvas id={canvasId}></canvas>;
}

export default ProjectSelectionCanvas;
