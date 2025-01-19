import react from "react";
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import About from './About';
import Contact from "./Contact";
import HeaderSection from "./HeaderSection";
import Home from './home';
import Explore from './Explore';
import FAQs from "./FAQs";
import Feedback from "./Feedback";
import FooterSection from "./FooterSection";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Registration from "./Registration";
import Seller from "./Seller";



function App() {

  const location = useLocation();  //access current route

  //exclude header and footer on specific routes
  const hideHeaderFooter = ["/Login", "/Registration"].includes(location.pathname);

  return (
    <div>
      
        <div className="routeLabel">
          {!hideHeaderFooter && <HeaderSection />}   {/*render header if not on Login and Registration */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Explore" element={<Explore />}></Route>
            <Route path="/FAQs" element={<FAQs />}></Route>
            <Route path="/Feedback" element={<Feedback />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Seller" element={<Seller />}></Route>
            <Route path="/Registration" element={<Registration />}></Route>
          </Routes>

          {!hideHeaderFooter && <FooterSection />}
        </div>
      
    </div>
  );
};

export default App;