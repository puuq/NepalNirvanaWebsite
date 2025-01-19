import React from "react";
import './App.css';

const Login = () => {

    return (
        <div>
            <div className="loginForm">
                <h2>Login</h2>
                <form >
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"

                    ></input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                    ></input>

                    <button
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;