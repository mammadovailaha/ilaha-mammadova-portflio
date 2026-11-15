import { useRef } from "react";
import { Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Group, PointLight, Vector2, Vector3 } from "three";
import { useScrollStore } from "../store/useScrollStore";

export type GlassMaterialConfig = {
  transmission: number;
  thickness: number;
  roughness: number;
  chromaticAberration: number;
  distortion: number;
};

export function GlassObject({ material }: { material: GlassMaterialConfig }) {
  const screenWidth = useThree((state) => state.size.width);
  const responsiveScale = screenWidth < 700 ? 0.58 : screenWidth < 1100 ? 0.78 : 1;
  const object = useRef<Group>(null);
  const glow = useRef<PointLight>(null);
  const target = useRef(new Vector3());
  const targetScale = useRef(new Vector3(responsiveScale, responsiveScale, responsiveScale));
  const previousPointer = useRef(new Vector2());
  const pointerEnergy = useRef(0);
  useFrame((state, delta) => {
    const [x, y] = useScrollStore.getState().pointer;
    const scroll = useScrollStore.getState().progress;
    const pointerDelta = Math.hypot(x - previousPointer.current.x, y - previousPointer.current.y);
    const movement = Math.min(1, pointerDelta / Math.max(delta, 0.001) * 0.12);
    pointerEnergy.current += (movement - pointerEnergy.current) * (1 - Math.exp(-delta * (movement > pointerEnergy.current ? 15 : 3.5)));
    previousPointer.current.set(x, y);
    const energy = pointerEnergy.current;
    target.current.set(x * 0.68, y * 0.52 - scroll * 0.48, 0.12);
    targetScale.current.set(responsiveScale * (1 + energy * 0.17), responsiveScale * (1 + energy * 0.11), responsiveScale * (1 - energy * 0.04));
    if (object.current) {
      easing.damp3(object.current.position, target.current, 0.24, delta);
      easing.damp3(object.current.scale, targetScale.current, 0.16, delta);
      easing.damp(object.current.rotation, "x", y * 0.48 + Math.sin(state.clock.elapsedTime * 1.4) * energy * 0.12, 0.3, delta);
      easing.damp(object.current.rotation, "y", x * 0.52 + state.clock.elapsedTime * 0.035, 0.3, delta);
      easing.damp(object.current.rotation, "z", -x * y * 0.2, 0.3, delta);
    }
    if (glow.current) glow.current.intensity = 0.18 + energy * 1.6;
  });
  return <Float speed={1.3} rotationIntensity={0.16} floatIntensity={0.22} floatingRange={[-0.1, 0.12]}>
    <group ref={object}>
      <mesh>
        <icosahedronGeometry args={[1.18, 3]} />
        <MeshTransmissionMaterial
          transmission={material.transmission}
          thickness={material.thickness}
          roughness={material.roughness}
          chromaticAberration={material.chromaticAberration}
          anisotropicBlur={0.2}
          distortion={material.distortion}
          distortionScale={0.4}
          temporalDistortion={0.1}
          ior={1.2}
          resolution={512}
          samples={6}
          backside={false}
          toneMapped={false}
        />
      </mesh>
      <Sparkles count={30} scale={2.8} size={3.2} speed={0.55} opacity={0.56} color="#f3c49d" />
      <pointLight ref={glow} position={[0, 0, 1.8]} color="#ffc99d" distance={4.5} intensity={0.18} />
    </group>
  </Float>;
}
