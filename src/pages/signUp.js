import React, { useState } from "react";
import "../css/signup.css";
import axiosInstance from "../utils/axiosInstance";

const signUp = () => {
    let [signUpDetails, setSignUpDetails] = useState({
        username: "",
        email: "",
        password: "",
    });
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setSignUpDetails({ ...signUpDetails, [name]: value });
    };

    const sumbit = () => {
        console.log('I am in submit', signUpDetails);
        axiosInstance.post('/signup', {signUpDetails})
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
            <div className="container">
                <div className="card">
                    <div className="card_title">
                        <h1>Create Account</h1>
                        <span>Already have an account? <a href="login">Sign In</a></span>
                    </div>
                    <div className="form">
                        <form action="/register" method="post">
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="UserName"
                                value={signUpDetails.username}
                                onChange={handleInput}/>

                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                id="email"
                                value={signUpDetails.email}
                                onChange={handleInput}
                                />
                            
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                id="password" 
                                value={signUpDetails.password}
                                onChange={handleInput}/>
                            
                            <button onClick={sumbit}>Sign Up</button>
                        </form>
                    </div>
                    <div className="card_terms">
                        <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signUp;