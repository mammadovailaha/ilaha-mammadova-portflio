import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { BackgroundText } from "./BackgroundText";
import { GlassObject, type GlassMaterialConfig } from "./GlassObject";
import { useScrollStore } from "../store/useScrollStore";

export function Scene({ material, name, role, theme }: { material: GlassMaterialConfig; name: string; role: string; theme: "light" | "dark" }) {
  const gl = useThree((state) => state.gl);
  const setPointer = useScrollStore((state) => state.setPointer);
  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      setPointer([(event.clientX / window.innerWidth) * 2 - 1, 1 - (event.clientY / window.innerHeight) * 2]);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [setPointer]);
  useEffect(() => {
    gl.setClearColor(theme === "dark" ? "#0b0b0f" : "#ece8e1", 1);
  }, [gl, theme]);
  return <>
    <BackgroundText name={name} role={role} theme={theme} />
    <GlassObject material={material} />
  </>;
}
