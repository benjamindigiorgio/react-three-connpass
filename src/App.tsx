import { Canvas } from "@react-three/fiber";
import BoxScene from "./components/BoxScene";
import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import RingScene from "./components/RingScene";
import GlassScene from "./components/GlassScene";
import { Button } from "./components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NUM_SCENES = 3;

function App() {
  const [currentScene, setCurrentScene] = useState<number>(0);
  return (
    <main className="h-screen w-screen relative max-w-full overflow-hidden">
      <div className="flex items-center gap-x-4 absolute top-1 left-1 z-50">
        <h1 className="text-3xl font-medium">Reactで学ぶ3D開発の基礎</h1>
        <div className="flex items-center gap-x-1">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setCurrentScene((prev) => (prev - 1 + NUM_SCENES) % NUM_SCENES);
            }}
          >
            <ChevronLeft />
          </Button>
          <span>
            シーン:{currentScene + 1}/{NUM_SCENES}
          </span>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setCurrentScene((prev) => (prev + 1) % NUM_SCENES);
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Canvas>
        {currentScene === 0 ? <RingScene /> : null}
        {currentScene === 1 ? <BoxScene /> : null}
        {currentScene === 2 ? <GlassScene /> : null}
        <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
        <OrbitControls makeDefault />
      </Canvas>
    </main>
  );
}

export default App;
