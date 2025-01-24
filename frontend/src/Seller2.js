import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Seller2 = () => {
  const { state } = useLocation();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleBecomeSeller = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: state.emailOrPhone,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage("You became a seller!");
        // Additional logic for registering as a seller
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid password. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="sellerContainer">
      <div>NepalNirvana Seller Center</div>
      <div>
        <p>Start Selling on NepalNirvana</p>
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        {successMessage && <p className="successMessage">{successMessage}</p>}
        <div>
          <button type="submit" onClick={handleBecomeSeller}>
            Become a Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seller2;
