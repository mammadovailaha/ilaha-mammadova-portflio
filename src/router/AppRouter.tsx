import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Project/Project";
import ProjectDetail from "../Pages/Project/ProjectDetail";
import Home3D from "../Pages/Home3D/Home3D";

const AppRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home3D/>}/>
    <Route path="/3d" element={<Home3D/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/project/project-detail/:id" element={<ProjectDetail/>}/>
   </Routes>
  )
}

export default AppRouter
