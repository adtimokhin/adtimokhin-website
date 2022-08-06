import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const gltfloader = new GLTFLoader();

function ProjectSelectionCanvas(props) {
  const canvasId = props.canvasId;

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
      const intersects = raycaster.intersectObjects(scene.children);

      // Only updating colour on the first object to which camera points
      if (intersects.length > 0) {
        // TODO: When object would be added to the scene update the action that happens upon hovering on the cards.
        intersects[0].object.material.color.set(0xff0000);
      }
    }

    // Setting up a canvas and a renderer
    const canvas = document.getElementById(canvasId); // Canvas where we draw the scene on the user's screen

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    canvas.addEventListener("mousemove", changeColourOnHover);

    // Objects

    // Sample lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    // Sample object
    // const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    // const boxMaterial = new THREE.MeshStandardMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // boxMesh.position.z = -2;
    // scene.add(boxMesh);

    // Blender Models
    // TODO: add models!

    // animate loop
    const animate = () => {
      if (props.startAnimate) {
        // TODO: Add curtains animation into here
      }

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, [props.startAnimate]);

  return <canvas id={canvasId}></canvas>;
}

export default ProjectSelectionCanvas;
