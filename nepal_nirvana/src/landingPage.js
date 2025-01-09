import React from "react";
import reactDom from "react-dom";
import axios from "axios";
import './App.css';
import {useEffect, useState } from "react";

import { useAuth } from "./AuthContext";

const LandingPage = () => {

    const { authState, login, logout } = useAuth();

    return (
        <div className="landingPage">
      <h1>Welcome to Nepal Nirvana</h1>
      <p>Explore the best of Nepal's heritage and culture.</p>

      {!authState.isAuthenticated ? (
        <div>
          <button onClick={() => login("user", { name: "John Doe" })}>
            Sign In / Register as User
          </button>
          <button onClick={() => login("seller", { name: "Seller XYZ" })}>
            Sign In / Register as Seller
          </button>
        </div>
      ) : authState.role === "user" ? (
        <div>
          <p>Welcome, {authState.user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Seller Panel</p>
          <p>Welcome, {authState.user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
    );
};

export default LandingPage;