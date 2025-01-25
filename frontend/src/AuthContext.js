// AuthContext.js or equivalent

import { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  // Load user and seller state from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedIsSeller = localStorage.getItem("isSeller");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedIsSeller === "true") {
      setIsSeller(true);
    }
  }, []);

  const login = (token, user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));  // Save user data
    localStorage.setItem("token", token);  // Save token
  };

  const logout = () => {
    setUser(null);
    setIsSeller(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isSeller");
  };

  const setIsSellerState = (state) => {
    setIsSeller(state);
    localStorage.setItem("isSeller", state);
  };

  return (
    <AuthContext.Provider value={{ user, isSeller, login, logout, setIsSeller: setIsSellerState }}>
      {children}
    </AuthContext.Provider>
  );
};
