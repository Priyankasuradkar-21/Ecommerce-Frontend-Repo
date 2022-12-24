import React, { useState } from "react";
import "../css/login.css";
import axiosInstance from "../utils/axiosInstance";

function Login() {
        const [loginDetails,setLoginDetails] = useState({
            username:"",
            password:""
        })
         
    const handleInput = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
    };

    const submit = () => {
        console.log('I am in submit', loginDetails);
        axiosInstance.post('/login', {loginDetails})
            .then((response) => {
                if(response.status === 200){
                    console.log('ALL GOOD');
                    alert('200');
                }
            })
            .catch((err) => {
                console.log('ERROR :::: ', err);
                alert(err);
            })
    }

    return (
        <>
           <div>
                <section>
                    <h1>Login</h1>
                    <div  className="login-form">
                        <h4>Username</h4>
                        <div  className="username-input">
                            <i  className="fas fa-user"></i>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="UserName"
                                value={loginDetails.username}
                                onChange={handleInput}/>
                        </div>
                        <h4>Password</h4>
                        <div  className="password-input">
                            <i  className="fas fa-lock"></i>
                            <input 
                                type="text" 
                                name="password" 
                                id="password" 
                                placeholder="password"
                                value={loginDetails.password}
                                onChange={handleInput}/>
                        </div>
                        <p>Forgot password?</p>
                    </div>
                    <button  onClick={submit} className="login-btn">
                        LOGIN
                    </button>
                    <div  className="alternative-signup" >
                        <p>Not a member? <span>Sign-up</span></p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Login;