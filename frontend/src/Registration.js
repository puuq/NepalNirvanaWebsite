import React, { useState } from "react";
import axios from "axios";
import './App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
    const [formData, setFormData] = useState ({
     name: '',
     email: '',
     password: '',
     preferences: [],
     address: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (formData.phone.length !==10) {
            alert('Phone number must be exactly 10 digits.');
            return;
        }

        try {
            const res = await axios.post('/api/auth/register', formData);
            alert(res.data.message);
        } catch (err) {
            alert(err.response.data.message || 'Connection to Database Failed');
        }
    };

    return (
        <div>
            <div className="registrationContainer">
                <div className="headerLogo">NepalNirvana</div>

                <div className="registrationForm">
                    <div className="registerHead">Create Account</div>
                    <form onSubmit={handleRegister}>
                        <div className="registerContent">
                            <p>Your Name</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <div className="registerContent">
                            <p>Mobile Number or Email</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <div className="registerContent">
                            <p>Mobile Number</p>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter Your Mobile Number"
                                value={formData.phone}
                                onChange={ (e) => {
                                    //allow only 10 digits and limit to 10 characters
                                    const value = e.target.value;
                                    if(/^\d{0,10}$/.test(value)) {
                                        setFormData({ ...formData, phone: value});
                                    }
                                }}
                            ></input>
                        </div>


                        <div className="registerContent">
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                placeholder="At least 6 characters"
                                value={formData.password}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <div className="registerContent">
                            <p>Re-enter Password</p>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            ></input>
                            <div >
                            <p style={{fontWeight: "normal", fontSize: "12px"}}><FontAwesomeIcon icon={faCircleExclamation} /> Password must be 6-16 characters long, at least 1 uppercase letter,1 lowercase letter,1 digit, and 1 special character. </p>
                            </div>
                        </div>

                        <div className="registerContent">
                            <input
                                name="address"
                                placeholder="Enter Your Current Address"
                                value={formData.address}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <div className="registerContent">
                            <button type="submit" className="registerButton">Register</button>
                        </div>
                    </form>
                </div>

                <div className="registerInfo" style={{marginTop: "15px"}}>
                    <p style={{marginTop: "25px"}}>By creating an Account, you agree to NepalNirvana's <Link>Terms and Conditions</Link> and <Link>Privacy Policy.</Link></p>
                </div>

            
                <hr style={{borderTop: "2px solid black", marginTop: "10px"}}></hr>

                <div className="registerInfo" >
                    <p style={{marginTop: "25px", fontSize: "18px", fontWeight: "bold"}}>Become a Seller</p>
                    <Link style={{fontSize: "18px"}}>Create a Free Busines Account</Link>
                </div>

                <hr style={{borderTop: "2px solid black", marginTop: "10px"}}></hr>

                <div className="registerInfo">
                    <p style={{marginTop: "25px", fontSize: "18px", color: "black", fontWeight: "bold" }}>Already have an Account?</p>
                    <Link to="/Login" style={{fontSize: "18px"}}>Sign in</Link>
                </div>

                <hr style={{borderTop: "2px solid black", marginTop: "10px"}}></hr>
            </div>
        </div>
    );
};

export default Registration;