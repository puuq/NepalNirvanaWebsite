import React, { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', {email,password});
            alert('Login Successful');
            console.log('Token:', res.data.token);
        } catch (err) {
            alert(err.response.data.message || 'Login Failed');
        }
    };

    return (
        <div>
            <div className="loginForm">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                        <Link to='/LandingPage'>
                            Login
                        </Link>
                    </button>
                </form>

                <p>New to NepalNirvana</p>
                <button>
                    <Link to="/Registration">
                        Create NepalNirvana Account
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Login;