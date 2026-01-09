import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/home"
import Resume from './pages/resume';
import Projects from "./pages/projects";


const Router =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}>  </Route>
             <Route path="/resume" element={<Resume/>}>  </Route>
             <Route path="/projects" element={<Projects />} />

            </Routes></>
    )
}


export default Router;