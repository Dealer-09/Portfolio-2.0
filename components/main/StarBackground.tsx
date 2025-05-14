"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    const arr = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    // NaN check for safety
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) arr[i] = 0;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} frustumCulled {...props}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[sphere, 3]}
            count={sphere.length / 3}
            array={sphere}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;