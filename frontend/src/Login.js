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
      
        // Validate email or phone input
        if (!/^\d{10}$/.test(email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert('Enter a valid email address or a 10-digit phone number.');
          return;
        }
      
        try {
          const res = await axios.post('/api/auth/login', {
            emailOrPhone: email,
            password,
          });
      
          login(res.data.user);
          alert('Login Successful');
          console.log('Token:', res.data.token);
          navigate('/LandingPage');
        } catch (err) {
          alert(err.response?.data?.message || 'Login Failed');
        }
      };
      
      
    return (
        <div>
            <div className="loginContainer">

                <div className="headerLogo">NepalNirvana</div>

                <div className="loginForm">
                    <form onSubmit={handleLogin}>
                        <div className="loginContent">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email Address / Phone Number"

                            ></input>
                        </div>

                        <div className="loginContent">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                            ></input>

                            <div>
                                <Link style={{marginTop: "0", textAlign: "right"}}>Forgot password?</Link>
                            </div>
                        </div>

                        <div className="loginContent">
                            <button
                                type="submit"
                                className="registerButton"
                            >
                                
                                    Login
                                
                            </button>
                        </div>
                    </form>
                </div>

                <div className="loginMoreContent">
                    <p>New to NepalNirvana?</p>
                    <button>
                        <Link to="/Registration">
                            Create NepalNirvana Account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;