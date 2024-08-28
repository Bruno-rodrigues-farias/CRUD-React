import { Routes, Route } from "react-router";

import Home from '../Pages/Home';
import Admin from "../Pages/Admin";
import Cadastro from '../Pages/Cadastro';
import Private from "./Private";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/admin" element={ <Private> <Admin/> </Private> } />
            <Route path="*" element={<Home/>}/>
        </Routes>
    
    )

}

export default RoutesApp;