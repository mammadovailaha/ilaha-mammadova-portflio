import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Project/Project";
import ProjectDetail from "../Pages/Project/ProjectDetail";
import Home3D from "../Pages/Home3D/Home3D";
import { CVPage } from "../Pages/CV/CVPage";

const AppRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home3D/>}/>
    <Route path="/3d" element={<Home3D/>}/>
    <Route path="/cv/business-analyst" element={<CVPage kind="businessAnalyst"/>}/>
    <Route path="/cv/frontend" element={<CVPage kind="frontend"/>}/>
    <Route path="/cv/software" element={<CVPage kind="software"/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/project/project-detail/:id" element={<ProjectDetail/>}/>
   </Routes>
  )
}

export default AppRouter
