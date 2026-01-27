"use client";

import { Canvas } from "@react-three/fiber";
import { Grid, Center, Text3D } from "@react-three/drei";

export default function BlueprintScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-slate-50 opacity-50">
      <Canvas camera={{ position: [10, 10, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Center top>
          <Grid
            args={[10.5, 10.5]}
            cellSize={0.6}
            cellThickness={1}
            cellColor="#64748b"
            sectionSize={3.3}
            sectionThickness={1.5}
            sectionColor="#94a3b8"
            fadeDistance={25}
            fadeStrength={1}
            infiniteGrid
          />
        </Center>
      </Canvas>
    </div>
  );
}
