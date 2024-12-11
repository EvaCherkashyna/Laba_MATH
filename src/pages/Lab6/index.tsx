import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Box } from "@mui/material";

function createKeyShape() {
  const shape = new THREE.Shape();

  shape.moveTo(0, 0);
  shape.lineTo(0, 2);         
  shape.lineTo(0.5, 2);     
  shape.lineTo(0.5, 0.5);     

  shape.lineTo(0.3, 0.7);     
  shape.lineTo(0.5, 0.9);     
  shape.lineTo(0.3, 1.1);
  shape.lineTo(0.5, 1.3);     
  shape.lineTo(0.3, 1.5);
  shape.lineTo(0.5, 1.7);     
  shape.lineTo(0.3, 2);  
  shape.lineTo(0.5, 2);       

  shape.lineTo(0.5, 0);     
  shape.lineTo(0, 0);       

  return shape;
}


const LockModel = () => {
  return (
    <Box className="h-max w-full">
      <Canvas style={{ height: "86vh" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {/* Корпус замка */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[2, 2.5, 1]} />
          <meshStandardMaterial color="transparent" transparent={true} opacity={0.4} wireframe={true} />
        </mesh>

        {/* Серцевина замка */}
        <mesh position={[-0.2, -1.75, -0.1]}>
          <extrudeGeometry args={[createKeyShape(), { depth: 0.2, bevelEnabled: false }]} />
          <meshStandardMaterial color="gray" transparent={true} opacity={1} wireframe={true} />
        </mesh>

        {/* Дуга замка */}
        <mesh position={[0, 0.75, 0]}>
          <torusGeometry args={[0.8, 0.15, 16, 100, Math.PI]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Ключ */}
        <group position={[2.5, -1, 0]}>
          <mesh >
            <boxGeometry args={[0.2, 1.5, 0.1]} />
            <meshStandardMaterial color="silver" />
          </mesh>

          {/* Шапка ключа */}
          <mesh position={[0, 0.8, 0]} rotation={[0, 1.6, 1.6]}>
            <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
            <meshStandardMaterial color="silver" />
          </mesh>

          {/* Зубчики ключа */}
          {Array.from({ length: 4 }, (_, index) => (
            <mesh key={index} position={[0, -0.6 + index * 0.3, 0]}>
              <boxGeometry args={[0.3, 0.1, 0.05]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          ))}
        </group>

        <OrbitControls />
      </Canvas>
    </Box>
  );
};

export default LockModel;
