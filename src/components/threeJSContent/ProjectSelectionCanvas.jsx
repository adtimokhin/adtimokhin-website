import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import Matrix2D from "../../../math/matrix";

const gltfloader = new GLTFLoader();

function ProjectSelectionCanvas(props) {
  const canvasId = props.canvasId;

  // THREE JS code goes in here
  useEffect(() => {
    const scene = new THREE.Scene();
    // making a basic camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    function showA(event) {
      // Calculating Camera positon
      const cameraX = camera.position.x;
      const cameraY = camera.position.y;
      const cameraZ = camera.position.z;

      const cameraXAngle = camera.rotation.x;
      const cameraYAngle = camera.rotation.y;
      const cameraZAngle = camera.rotation.z;

      // Connvert the client's coordinates to standart form
      const clientX = 2 * (event.clientX / window.innerWidth) - 1;
      const clientY = 1 - 2 * (event.clientY / window.innerHeight);
      const clientZ = 0;

      // Turning initial coordinates of mouse position into a matrix
      var mousePositionMatrix = new Matrix2D([[clientX], [clientY], [clientZ]]);

      // Rotation matrices
      const rotationMatrixX = new Matrix2D([
        [1, 0, 0],
        [0, Math.cos(cameraXAngle), -Math.sin(cameraXAngle)],
        [0, Math.sin(cameraXAngle), Math.cos(cameraXAngle)],
      ]);

      const rotationMatrixY = new Matrix2D([
        [Math.cos(cameraYAngle), 0, Math.sin(cameraYAngle)],
        [0, 1, 0],
        [-Math.sin(cameraYAngle), 0, Math.cos(cameraYAngle)],
      ]);

      const rotationMatrixZ = new Matrix2D([
        [Math.cos(cameraZAngle), -Math.sin(cameraZAngle), 0],
        [Math.sin(cameraZAngle), Math.cos(cameraZAngle), 0],
        [0, 0, 1],
      ]);

      // Applying rotation in X-plane:
      mousePositionMatrix = rotationMatrixX.multiply(mousePositionMatrix);

      // Applying rotation in Y-plane:
      mousePositionMatrix = rotationMatrixY.multiply(mousePositionMatrix);

      // Applying rotation in Z-plane:
      mousePositionMatrix = rotationMatrixZ.multiply(mousePositionMatrix);

      // Calculating the intial position (so that we can find a vector projection afterwards)
      const positionX = mousePositionMatrix.rows[0][0] + cameraX
      const positionY = mousePositionMatrix.rows[1][0] + cameraY
      const positionZ = mousePositionMatrix.rows[2][0] + cameraZ
    }

    // Setting up a canvas and a renderer
    const canvas = document.getElementById(canvasId); // Canvas where we draw the scene on the user's screen

    canvas.addEventListener("mousemove", showA);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Sample lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    // Sample object

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.z = -20;

    scene.add(boxMesh);

    // Helper
    const size = 1000;
    const divisions = 1000;

    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

    // Blender Models

    // Sample model
    gltfloader.load("static/iMadeADonut.gltf", (gltf) => {
      scene.add(gltf.scene);
    });

    // animate loop
    const animate = () => {
      if (props.startAnimate) {
        boxMesh.rotation.x += 0.01;
        boxMesh.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, [props.startAnimate]);

  return <canvas id={canvasId}></canvas>;
}

export default ProjectSelectionCanvas;
