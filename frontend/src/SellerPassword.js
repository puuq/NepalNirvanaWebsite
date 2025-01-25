import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { useAuth } from "./AuthContext";

const SellerPassword = () => {
    const { state } = useLocation();
    const { emailOrPhone } = state || {};
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, setIsSeller } = useAuth(); // Use AuthContext
    const navigate = useNavigate();
  
    const handleValidate = async () => {
      if (!password) {
        setError("Please enter your password.");
        return;
      }
  
      try {
        const res = await axios.post("/api/auth/login", { emailOrPhone, password });
        if (res.status === 200) {
          alert("Validation Successful. You are now a seller!");
  
          // Update global state and local storage
          login(res.data.user); // Assuming the response contains user info
          setIsSeller(true);
  
          navigate("/"); // Redirect to the landing page
        }

        const {token, user} = res.data;
        login (token, user);

      } catch (err) {
        setError(err.response?.data?.message || "Invalid credentials.");
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
            setError("");
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="button" onClick={handleValidate}>
          Validate
        </button>
      </div>
    );
  };
  

export default SellerPassword;
