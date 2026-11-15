import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { PreferencesProvider } from "./context/PreferencesProvider";

function App() {
  return <PreferencesProvider><BrowserRouter><AppRouter /></BrowserRouter></PreferencesProvider>;
}

export default App;
