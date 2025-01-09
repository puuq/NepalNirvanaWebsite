/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//wraping the entire application with AuthProvider to enable global access to authentication state
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);*/

import React from "react";
import ReactDOM from "react-dom/client"; // For React 18
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Wrapping the entire application with AuthProvider
import { AuthProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot for React 18
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
