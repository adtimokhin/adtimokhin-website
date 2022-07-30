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

    // camera.rotation.x = - Math.PI / 3;

    var minY = 100;
    var maxY = -100;

    var minX = 100;
    var maxX = -100;

    function showA(event) {
      // Calculating Camera positon
      const cameraX = camera.position.x;
      const cameraY = camera.position.y;
      const cameraZ = camera.position.z;

      const cameraYAngle = camera.rotation.y;
      const cameraXAngle = camera.rotation.x;
      const cameraZAngle = camera.rotation.z;

      // Step one: Connvert the client's coordinates to standart form

      var clientX = 2 * (event.clientX / window.innerWidth) - 1;
      var clientY = 1 - 2 * (event.clientY / window.innerHeight);

      // Applying rotation in Y-plane:
      var mouseX = Math.cos(cameraYAngle) * clientX;
      var mouseY = clientY;
      var mouseZ = -Math.sin(cameraYAngle) * clientX;

      // Applying rotation in X-plane:
      mouseX = mouseX;
      mouseY = Math.cos(cameraXAngle) * mouseY;
      mouseZ = Math.sin(cameraXAngle) * clientY;

      // Applying rotation in Z-plane:
      const oldX = mouseX;
      const oldY = mouseY;
      mouseX = Math.cos(cameraZAngle) * oldX + Math.sin(cameraZAngle) * oldY;
      mouseY = Math.sin(cameraZAngle) * oldX + Math.cos(cameraZAngle) * oldY;

      if (mouseY > maxY) {
        maxY = mouseY;
      }

      if (mouseY < minY) {
        minY = mouseY;
      }

      if (mouseX > maxX) {
        maxX = mouseX;
      }

      if (mouseX < minX) {
        minX = mouseX;
      }

      console.log(`Mouse coordinates: (${mouseX}, ${mouseY} , ${mouseZ})`);
      console.log(`distance in y-plane: ${maxY - minY}`);
      console.log(`distance in x-plane: ${maxX - minX}`);
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
