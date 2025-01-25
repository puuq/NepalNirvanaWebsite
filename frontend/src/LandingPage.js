import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

import { useAuth } from "./AuthContext";
import SellerDashboard from "./SellerDashboard";

const LandingPage = () => {
  const { isSeller } = useAuth();
  const [showSellerDashboard, setShowSellerDashboard] = useState(false);
  const [items, setItems] = useState([
    {
      src: '/images/dhaka_topis.jpg',
      alt: 'Dhaka Topi',
      description: 'Dhaka Topis',
      price: '',
      category: '',
      link: '/explore',
    },
    {
      src: '/images/shawls.jpg',
      alt: 'Shawls',
      description: 'Beautiful Shawls',
      price: '',
      category: '',
      link: '/',
    },
    {
      src: '/images/handicrafts.jpg',
      alt: 'Handicrafts',
      description: 'Handmade Crafts',
      price: '',
      category: '',
      link: '/',
    },
    {
      src: '/images/mud_items.jpg',
      alt: 'Mud Items',
      description: 'Mud Items',
      price: '',
      category: '',
      link: '/',
    },
    {
      src: '/images/statues.jpg',
      alt: 'Statues',
      description: 'Statues',
      price: '',
      category: '',
      link: '/',
    },
  ]);

  const [uploadedItems, setUploadedItems] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Load uploaded items from local storage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem("uploadedItems");
    if (savedItems) {
      setUploadedItems(JSON.parse(savedItems));
    }
  }, []);

  // Save uploaded items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("uploadedItems", JSON.stringify(uploadedItems));
  }, [uploadedItems]);

  const handleAddItem = (newItem) => {
    const updatedItems = [
      ...uploadedItems,
      {
        src: newItem.image,
        alt: newItem.title,
        description: newItem.description,
        price: newItem.price,
        category: newItem.category,
      },
    ];
    setUploadedItems(updatedItems);
    setShowSellerDashboard(false);
  };

  return (
    <div>
      <div className="landingPage">
        {isSeller && !showSellerDashboard && (
          <div>
            <button onClick={() => setShowSellerDashboard(true)}>
              Upload an Item
            </button>
          </div>
        )}

        {showSellerDashboard && (
          <SellerDashboard onAddItem={handleAddItem} />
        )}

        <h1>Welcome to Nepal Nirvana</h1>
        <p>Explore the best of Nepal's heritage and culture.</p>

        <div className="slidingImages">
          <Slider {...sliderSettings}>
            {items.map((item, index) => (
              <div key={index}>
                <img src={item.src} alt={item.alt} />
                <p>{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div className="uploadedItems">
          <h2>Newly Uploaded Items</h2>
          <div className="itemGrid">
            {uploadedItems.map((item, index) => (
              <div key={index} className="itemCard">
                <img src={item.src} alt={item.alt} />
                <h3>{item.alt}</h3>
                <p>Price: ${item.price}</p>
                <p>Category: {item.category}</p>

                <button>Edit</button>
                <button>Delete</button>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LandingPage;
