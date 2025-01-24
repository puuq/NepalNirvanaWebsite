import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Seller = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleContinue = async () => {
    // Validate input
    if (!/^\d{10}$/.test(emailOrPhone) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone)) {
      setError('Please enter a valid email address or 10-digit phone number.');
      return;
    }
  
    try {
      // Check if user exists
      console.log('Sending request with:', emailOrPhone); // Log input
      const res = await axios.post('http://localhost:5000/api/auth/check-user', { emailOrPhone });
      console.log('Response received:', res.data); // Log response
  
      if (res.status === 200) {
        // Navigate to password page
        navigate('/SellerPassword', { state: { emailOrPhone } });
      }
    } catch (err) {
      console.error('Error response:', err.response); // Log full error response
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };
  

  return (
    <div className="sellerContainer">
      <div>NepalNirvana Seller Center</div>
      <div>
        <p>Start Selling on NepalNirvana</p>
        <p>Email or Mobile Phone Number</p>
        <input
          type="text"
          id="emailInput"
          placeholder="Enter email or phone number"
          value={emailOrPhone}
          onChange={(e) => {
            setEmailOrPhone(e.target.value);
            setError('');
          }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Seller;
