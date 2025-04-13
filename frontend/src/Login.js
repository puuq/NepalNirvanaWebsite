import React, { useState } from "react";
import './App.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Enter a valid email or 10-digit phone number.');
      return;
    }

    try {
      const res = await axios.post('/api/auth/login', {
        emailOrPhone: email,
        password,
      });

      const { token, user } = res.data;
      login(token, user);
      alert('Login Successful');
      navigate('/LandingPage');
    } catch (err) {
      alert(err.response?.data?.message || 'Login Failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post('/api/auth/register', {
        fullName,
        email,
        password
      });

      alert("Registration Successful! Please log in.");
      setIsRegistering(false);
    } catch (err) {
      alert(err.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <div className="loginContainer">
      <div className="headerLogo">NepalNirvana</div>

      {!isRegistering ? (
        <div className="loginForm">
          <form onSubmit={handleLogin}>
            <div className="loginContent">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address / Phone Number"
              />
            </div>

            <div className="loginContent">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div>
                <Link>Forgot password?</Link>
              </div>
            </div>

            <div className="loginContent">
              <button type="submit">Login</button>
            </div>
          </form>

          <div className="loginMoreContent">
            <p>New to NepalNirvana?</p>
            <button onClick={() => setIsRegistering(true)}>Create NepalNirvana Account</button>
          </div>
        </div>
      ) : (
        <div className="registrationForm">
          <form onSubmit={handleRegister}>
            <div className="registerHead">Register</div>
            <div className="registerContent">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              <button type="submit">Register</button>
              <p>Already have an account?</p>
              <button onClick={() => setIsRegistering(false)}>Back to Login</button>
            </div>
          </form>
        </div>
      )}

      <div>
        <Link to="/LandingPage">Go back to NepalNirvana</Link>
      </div>
    </div>
  );
};

export default Login;
