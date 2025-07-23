import "./App.css";
import Footer from "./Layout/Footer";
// import Navbar from "./Layout/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
