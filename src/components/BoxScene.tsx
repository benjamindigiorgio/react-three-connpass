import { PivotControls, Text } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

const BoxScene = () => {
  const controls = useControls({
    color: {
      value: "#ff0000",
      label: "色",
    },
    showPerf: { value: false, label: "パフォーマンス" },
    text: { value: "テキスト", label: "テキスト" },
    showControls: { value: false, label: "コントロール" },
  });

  return (
    <>
      <mesh castShadow receiveShadow>
        <pointLight position={[2, 5, 2]} intensity={30} />
        <ambientLight intensity={0.2} />
        <boxGeometry />
        <meshStandardMaterial color={controls.color} />
        {controls.showPerf ? <Perf position="bottom-left" /> : null}
      </mesh>
      <group position={[0, 1, 0]}>
        <PivotControls enabled={controls.showControls}>
          <Text>{controls.text}</Text>
        </PivotControls>
      </group>
    </>
  );
};

export default BoxScene;
