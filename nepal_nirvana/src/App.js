import react from "react";
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import About from './About';
import Contact from "./Contact";
import HeaderSection from "./HeaderSection";
import Home from './home';
import Explore from './Explore';
import FAQs from "./FAQs";
import Feedback from "./Feedback";
import LandingPage from "./LandingPage";
import Login_Signup from "./Login-Signup";
import Seller from "./Seller";
import FooterSection from "./FooterSection";


function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')  
      .then(response => {
        console.log(response.data);
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Router>
        <div className="routeLabel">
          <HeaderSection />
          <Routes>
            <Route path="/" element={<LandingPage data={data} />} />
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Explore" element={<Explore />}></Route>
            <Route path="/FAQs" element={<FAQs />}></Route>
            <Route path="/Feedback" element={<Feedback />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/Login_Signup" element={<Login_Signup />}></Route>
            <Route path="/Seller" element={<Seller />}></Route>
          </Routes>

          <FooterSection />
        </div>
      </Router>
    </div>
  );
};

export default App;