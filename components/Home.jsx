'use client';
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, useAnimations } from "@react-three/drei";
import { useState } from "react";

function Model({ additionalValue, ...props }) {
  const { scene, nodes, materials, animations } = useGLTF("/robo3.glb");
  const { actions } = useAnimations(animations, nodes);
  const [headPosition, setHeadPosition] = useState({ x: 0, y: 0, z: 0 }); // Initial position of the head bone

  // Rotate the head bone
  useFrame(() => {
    if (nodes.head) { // Check if the Head node exists
      nodes.head.rotation.x = additionalValue; // Rotate the Head bone
    }
  });

  // You can use the additionalValue here as needed

  return <primitive object={scene} {...props} />;
}

function Home() {
  const [additionalValue, setAdditionalValue] = useState(0);

  const moveHead = () => {
    var newV=1;
    setAdditionalValue(additionalValue+newV);
  };

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "position": "absolute" }}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls speed={1.5} global zoom={0} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"sunset"}>
            <Model scale={1} additionalValue={additionalValue} />
          </Stage>
        </PresentationControls>
      </Canvas>
      <button onClick={moveHead} className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">Move Head</button>
    </>
  );
}

export default Home;
