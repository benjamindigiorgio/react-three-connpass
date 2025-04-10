import {
  Environment,
  MeshTransmissionMaterial,
  Text,
  Torus,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
const GlassScene = () => {
  const torusRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.005;
      torusRef.current.rotation.y += 0.004;
    }
  });
  const { viewport } = useThree();
  return (
    <>
      <Environment preset="night" />
      <directionalLight intensity={0.5} position={[0, 10, 0]} />
      <ambientLight intensity={0.2} />
      <group>
        <Text fontSize={Math.min(viewport.width / 10, 1)} position={[0, 0, -1]}>
          ありがとうございます！
        </Text>
        <Torus
          args={[0.8, 0.4, 64, 100]}
          ref={torusRef}
          position={[0, 0, 1]}
          rotation={[0.2, 0.2, 0]}
        >
          <MeshTransmissionMaterial
            backside
            thickness={0.2}
            chromaticAberration={0.06}
            ior={1.3}
          />
        </Torus>
      </group>
    </>
  );
};

export default GlassScene;
