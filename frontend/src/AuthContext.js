import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Provide the AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User info
  const [isSeller, setIsSeller] = useState(false); // Whether the user is a seller

  const login = (userData) => {
    setUser(userData);
    if (userData?.role === "seller") {
      setIsSeller(true);
    } else {
      setIsSeller(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsSeller(false);
  };

  return (
    <AuthContext.Provider value={{ user, isSeller, setIsSeller, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
