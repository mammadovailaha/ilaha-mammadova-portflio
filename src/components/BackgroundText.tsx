import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
export function BackgroundText({ name, role, theme }: { name: string; role: string; theme: "light" | "dark" }) {
  const { viewport } = useThree();
  const mobile = viewport.width < 5.2;
  const size = mobile ? viewport.width * 0.16 : Math.min(0.92, viewport.width * 0.11);
  const roleSize = mobile ? 0.105 : Math.min(0.12, viewport.width * 0.015);
  return <group position={[0, mobile ? 0.58 : 0.24, -2]}>
    <Text font="/fonts/Inter_18pt-Bold.ttf" fontSize={size} lineHeight={0.9} textAlign="center" anchorX="center" anchorY="middle" color={theme === "dark" ? "#ece8e1" : "#282521"} material-toneMapped={false}>
      {mobile ? name.replace(/\s+/, "\n") : name}
    </Text>
    <Text position={[0, mobile ? -0.7 : -0.95, 0.01]} font="/fonts/Inter_18pt-Bold.ttf" fontSize={roleSize} letterSpacing={0.02} textAlign="center" anchorX="center" anchorY="middle" color={theme === "dark" ? "#aaa6a0" : "#6b665f"} material-toneMapped={false}>
      {role}
    </Text>
  </group>;
}
