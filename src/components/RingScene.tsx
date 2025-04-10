import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RingScene = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ pointer }) => {
    if (ref.current) {
      ref.current.lookAt(pointer.x, pointer.y, 2);
    }
  });
  return (
    <mesh ref={ref}>
      <ringGeometry />
      <meshBasicMaterial side={THREE.DoubleSide} color="blue" />
    </mesh>
  );
};

export default RingScene;
