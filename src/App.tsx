import "./App.css";
import "./index.css";
import Footer from "./Layout/Footer";
// import Navbar from "./Layout/Navbar";
import AppRouter from "./router/AppRouter";
import { PreferencesProvider } from "./context/PreferencesProvider";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <PreferencesProvider>
    <div className="app-shell overflow-x-hidden">
      <ScrollToHash />
      <AppRouter />
      <Footer />
    </div>
    </PreferencesProvider>
  );
}

export default App;
