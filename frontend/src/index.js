/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
*/

/*
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
*/




import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
