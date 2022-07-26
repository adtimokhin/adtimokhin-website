import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const gltfloader = new GLTFLoader();

function ProjectSelectionCanvas(props) {
  const canvasId = props.canvasId;

  // THREE JS code goes in here
  useEffect(() => {
    const scene = new THREE.Scene();
    // making a basic camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.z = 1.5;

    // Setting up a canvas and a renderer
    const canvas = document.getElementById(canvasId); // Canvas where we draw the scene on the user's screen

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

    // Blender Models
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
