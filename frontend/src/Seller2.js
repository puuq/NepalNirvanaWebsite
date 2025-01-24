import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Seller2 = () => {
  
  return (
    <div className="sellerContainer">
      <div>NepalNirvana Seller Center</div>
      <div>
        <p>Start Selling on NepalNirvana</p>
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter password"
          
        />
        
          <button type="submit" onClick={handleBecomeSeller}>
            Become a Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seller2;
