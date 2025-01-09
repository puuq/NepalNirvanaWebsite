import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const FooterSection = () => {
    return (

        <div className="footer">

            <div className="footerBackToTop">
                <p>Back To Top <FontAwesomeIcon icon={faArrowUp} /></p> 
            </div>

            <div className="footerContainer">
                
                <div className="footerLogo">
                    <h1>Nepal Nirvana</h1>
                </div>

                <div className="footerContent">

                    <div className="footerSection">
                        <h3>Get to Know Us</h3>
                        <ul>
                            
                            <li><Link href="#" className="footerLinks">About NepalNirvana</Link></li>
                            <li><Link href="#" className="footerLinks">Blog</Link></li>
                            <li><Link href="#" className="footerLinks">Explore</Link></li>
                            <li><Link href="#" className="footerLinks">Our Sellers</Link></li>
                        </ul>
                    </div>

                    <div className="footerSection">
                        <h3>Explore</h3>
                        <ul>
                                
                            <li><Link href="#" className="footerLinks">Arts & Culture</Link></li>
                            <li><Link href="#" className="footerLinks">Food & Nature</Link></li>
                            <li><Link href="#" className="footerLinks">Handicrafts</Link></li>
                            <li><Link href="#" className="footerLinks">Tours & Experiences</Link></li>
                        </ul> 
                    </div>

                    <div className="footerSection">
                    <h3>Customer Care</h3>
                        <ul>
                            <li><Link href="#" className="footerLinks">Contact Us</Link></li>
                            <li><Link href="#" className="footerLinks">Help Center</Link></li>    
                            <li><Link href="#" className="footerLinks">How to Buy</Link></li>
                            
                            <li><Link href="#" className="footerLinks">Returns & Refunds</Link></li>
                        </ul>
                    </div>

                    <div className="footerSection">
                        <h3>Let Us Help You</h3>
                        <ul>
                            <li><Link href="#" className="footerLinks">Your Account</Link></li>    
                            <li><Link href="#" className="footerLinks">Your Orders</Link></li>
                            <li><Link href="#" className="footerLinks">Terms and Conditions</Link></li>
                            <li><Link href="#" className="footerLinks">Privacy Policy</Link></li>
                            
                            
                        </ul>
                    </div>

                    <div className="footerSection">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="#" className="footerLinks">Explore</Link></li>    
                            <li><Link href="#" className="footerLinks">FAQs</Link></li>
                            <li><Link href="#" className="footerLinks">Feedback & Reviews</Link></li>
                            <li><Link href="#" className="footerLinks">Change Language</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FooterSection;