import { useEffect } from "react";
import * as THREE from "three";

function ProjectSelectionCanvas(props) {
  const canvasId = props.canvasId;
  //TODO: use props.startAnimate to start animation. It will be setted to true automatically when the button is pressed.

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

    // Setting up a canvas and a renderer
    const canvas = document.getElementById(canvasId); // Canvas where we draw the scene on the user's screen

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Sample lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    // animate loop
    const animate = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas id={canvasId}></canvas>;
}

export default ProjectSelectionCanvas;
