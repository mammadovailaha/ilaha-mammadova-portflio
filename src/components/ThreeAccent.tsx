import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh, Points } from "three";

function StarParticles({ count = 64 }: { count?: number }) {
  const points = useRef<Points>(null);
  useFrame((state) => {
    if (points.current) points.current.rotation.y = state.clock.elapsedTime * 0.025;
  });
  const positions = useMemo(() => {
    const particles = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      particles[index * 3] = (Math.random() - 0.5) * 4.4;
      particles[index * 3 + 1] = (Math.random() - 0.5) * 5.1;
      particles[index * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    return particles;
  }, [count]);
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#ffad32" size={0.045} transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function FloatingShape() {
  const mesh = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.12;
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
  });

  return (
    <>
    <mesh ref={mesh} position={[0.95, 0.85, -0.2]} scale={0.55}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#ff8a00" emissive="#ff5a00" emissiveIntensity={0.7} roughness={0.24} metalness={0.55} flatShading />
    </mesh>
    <mesh position={[-1.05, -0.8, 0.1]} scale={0.23}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ffd166" emissive="#ff9c00" emissiveIntensity={0.45} roughness={0.3} metalness={0.4} />
    </mesh>
    </>
  );
}

function StarField() {
  return (
    <>
      <ambientLight intensity={1.4} />
      <pointLight position={[1, 2, 3]} intensity={22} color="#ff9a24" />
      <StarParticles count={72} />
      <StarParticles count={24} />
      <FloatingShape />
    </>
  );
}

export default function ThreeAccent() {
  const webglAvailable = typeof window !== "undefined" && (() => {
    try {
      const canvas = document.createElement("canvas");
      return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      return false;
    }
  })();
  if (!webglAvailable) return null;
  return (
    <div className="three-accent" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}><StarField /></Suspense>
      </Canvas>
    </div>
  );
}
