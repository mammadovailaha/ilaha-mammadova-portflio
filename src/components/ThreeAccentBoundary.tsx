import { Component, type ErrorInfo, type ReactNode } from "react";
import { lazy, Suspense } from "react";

const ThreeAccent = lazy(() => import("./ThreeAccent"));

class ThreeAccentErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("3D hero effect failed to load; keeping the portfolio available.", error, info.componentStack);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export default function ThreeAccentBoundary() {
  return (
    <ThreeAccentErrorBoundary>
      <Suspense fallback={null}><ThreeAccent /></Suspense>
    </ThreeAccentErrorBoundary>
  );
}
