import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import cerebro from '../models/CEREBRO.glb';

const Objeto = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Tamaño de la ventana de renderizado más pequeño
    const canvasWidth = window.innerWidth * 0.5;
    const canvasHeight = window.innerHeight * 0.5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight); // Establecer el nuevo tamaño de la ventana de renderizado
    renderer.setClearColor(0x000000); // Configurar el color de fondo de la ventana de renderizado

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const scene = new THREE.Scene();
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, canvasWidth / canvasHeight, 1, 100);
    camera.position.set(2, 2, 2); // Ajustar la posición inicial de la cámara más cerca del objeto

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      cerebro,
      function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );

    // Configuración de luces
    const ambientLight = new THREE.AmbientLight(0xCC0000, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xCC0000, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);

      // Actualizar la posición de la cámara y renderizar la escena
      controls.update();
      renderer.render(scene, camera);
    };

    animate(); // Iniciar el bucle de animación

    window.onresize = function () {
      camera.aspect = canvasWidth / canvasHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasWidth, canvasHeight);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-10 my-10">
      <div>
        <h2>descripcion</h2>
        <p>datos</p>
      </div>
      <canvas ref={canvasRef} />
      <div>
        <h2>Tecnica</h2>
        <p>conservacion</p>
        <h2>Funcion</h2>
        <p>Academico</p>
      </div>
    </div>
  );
};

export default Objeto;
