import React, { createContext, useState, useContext } from "react";

// Create an AuthContext
const AuthContext = createContext();

// Provide AuthContext to the app
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    role: null, // "user" or "seller"
    user: null, // User details
  });

  const login = (role, userDetails) => {
    setAuthState({ isAuthenticated: true, role, user: userDetails });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, role: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
