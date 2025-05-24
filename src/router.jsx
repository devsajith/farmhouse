import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/home"

const Router =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}>  </Route>
            </Routes></>
    )
}


export default Router;