import {
  Center,
  Environment,
  MeshTransmissionMaterial,
  RoundedBox,
  Text3D,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const GlassSceneAlt = () => {
  const { viewport } = useThree();
  return (
    <>
      <Environment preset="sunset" background />
      <directionalLight intensity={0.5} position={[0, 10, 0]} />
      <ambientLight intensity={0.2} />
      <group position={[0, 0, 0]} scale={0.4}>
        <RoundedBox args={[11, 4, 4]} radius={0.2}>
          <MeshTransmissionMaterial
            backside
            thickness={0.9}
            chromaticAberration={1.12}
            ior={2.1}
            roughness={0.21}
          />
        </RoundedBox>

        <Center>
          <Text3D
            font={"/fonts/Inter_Regular.json"}
            lineHeight={1.6}
            castShadow
            size={Math.min(viewport.width / 10, 2.5)}
            bevelEnabled
            bevelThickness={0.2}
          >
            THREE.JS
            <meshStandardMaterial color="black" />
          </Text3D>
        </Center>
      </group>
    </>
  );
};

export default GlassSceneAlt;
