import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const SellerPassword = () => {
  const { state } = useLocation();
  const { emailOrPhone } = state || {};
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleValidate = async () => {
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    try {
      const res = await axios.post('/api/auth/login', { emailOrPhone, password });
      if (res.status === 200) {
        alert('Validation Successful. You are now a seller!');
        navigate('/SellerDashboard'); // Redirect to the seller dashboard
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials.');
    }
  };

  return (
    <div className="passwordContainer">
      <div>Enter Your Password</div>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError('');
        }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="button" onClick={handleValidate}>
        Validate
      </button>
    </div>
  );
};

export default SellerPassword;
