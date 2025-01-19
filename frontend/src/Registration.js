import React, { useState } from "react";
import axios from "axios";
import './App.css';

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

        try {
            const res = await axios.post('/api/auth/register', formData);
            alert(res.data.message);
        } catch (err) {
            alert(err.response.data.message || 'Connection to Database Failed');
        }
    };

    return (
        <div>
            <div className="registrationForm">
                <h2> Register</h2>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    ></input>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    ></input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter the password"
                        value={formData.password}
                        onChange={handleChange}
                    ></input>

                    <textarea
                        name="address"
                        placeholder="Enter Your Current Address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;