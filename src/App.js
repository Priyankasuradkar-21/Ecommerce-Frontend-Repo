import React  from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from './pages/signUp';
import ForgetPassword from './pages/forgetPassword';
function App() {
    console.log('IN APP');
    return <>
        <Routes>
            <Route path = "/" element = {< Login/>} /> 
            <Route path = "/signup" element = {< SignUp />} />
            <Route path = "/forgetpassword" element = { <ForgetPassword/>} />
        </Routes>
    </>
     
}

export default App;