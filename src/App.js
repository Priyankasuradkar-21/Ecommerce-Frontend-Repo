import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import SignUp from './pages/signUp';

function App() {
  return <>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
     </Routes>
  </>
}

export default App;
