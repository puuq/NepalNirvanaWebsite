import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Seller = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
  
    const handleSellerContinue = async () => {
        console.log("Button clicked, emailOrPhone:", emailOrPhone);
      
        if (!emailOrPhone) {
          setErrorMessage("Please enter an email or phone number.");
          return;
        }
      
        try {
          console.log("Sending request...");
          const response = await fetch("http://localhost:5000/api/auth/check-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailOrPhone }),
          });
      
          const data = await response.json();
          console.log("Response received:", response.status, data);
      
          if (response.ok) {
            console.log("Navigation to /seller2");
            navigate("/seller2", { state: { emailOrPhone } });
          } else if (response.status === 404) {
            setErrorMessage("User not found. Please check your input.");
          } else {
            setErrorMessage(data.message || "An unknown error occurred.");
          }
        } catch (error) {
          console.error("Error during fetch:", error);
          setErrorMessage("Could not connect to the server. Please try again later.");
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
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          <button type="button" onClick={handleSellerContinue}>
            Continue
          </button>
        </div>
      </div>
    );
  };
  
  export default Seller;
  