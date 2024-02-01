'use client';
/* import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
const InteractiveScene = ({ character }) => {
  const { camera } = useThree();
  const characterRef = useRef();

  useFrame(() => {
    // Update character's left hand position based on mouse position
    if (characterRef.current) {
      const { x, y } = camera.position;
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera({ x: (x + 1) / 2, y: (y + 1) / 2 }, camera);
      const intersects = raycaster.intersectObject(characterRef.current.children[0].skeleton.bones[2]);

      if (intersects.length > 0) {
        const { x, y, z } = intersects[0].point;
        characterRef.current.children[0].skeleton.bones[ 2 ].position.set(x, y, z);
      }
    }
  });

  return (
    <group ref={characterRef}>
      {character}
    </group>
  );
};

export default InteractiveScene;
 */


// components/ModelViewer.js
// components/ModelViewer.js

// components/ModelViewer.js
import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useThree } from 'react-three-fiber';
const ModelViewer = () => {
  const modelRef = useRef();

  // Load your 3D model using GLTFLoader
  const gltf = useLoader(GLTFLoader, '/ROBOHAND/Robot_Arms.gltf');

  const { camera } = useThree();
camera.position.z = 5; // Adjust this value based on your model's size
const { scene } = gltf;
scene.scale.set(0.1, 0.1, 0.1); // Adjust the scale as needed

  useFrame(() => {
    // Rotate the model slowly
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={modelRef}>
      {gltf.scene ? <primitive object={gltf.scene} /> : null}
    </group>
  );
};

export default ModelViewer;
