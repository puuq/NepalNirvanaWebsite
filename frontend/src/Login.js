import React, { useState } from "react";
import './App.css';
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', {email,password});
            login(res.data.user);   //assuming API returns a user object
            alert('Login Successful');
            console.log('Token:', res.data.token);
            navigate("/LandingPage");
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email Address"

                    ></input>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    ></input>

                    <button
                        type="submit"
                    >
                        
                            Login
                        
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