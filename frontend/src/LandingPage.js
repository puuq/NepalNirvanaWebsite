import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';


import { useAuth } from "./AuthContext";

const LandingPage = () => {

  const { user, isSeller } = useAuth();

  const sliderSettings = {
    dots: false,        //enables navigation dots
    infinite: true,    //loops the slides
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  //autoslide after every 3 seconds
    prevArrow: <div className="slick-prev">{"<"}</div>, // Custom prev button
    nextArrow: <div className="slick-next">{">"}</div>, // Custom next button
  };

  //image data with descriptions

  const images = [
    {
      src: 'C:\Users\Kamala Rai Danuwar\NepalNirvana\frontend\public\images\dhaka topis.jpeg',
      alt: 'Dhaka Topi',
      description: 'dhaka topis',
      link : '/explore',
    },
    
    {
      src : '/images/shawls.jpg',
      alt: 'shawls',
      decription:'shawls',
    },

    {
      src: '/images/handicrafts.jpg',
      alt: 'handicrafts',
      description: 'crafts',
      link : '/',
    },

    {
      src: '/images/mud items.jpg',
      alt: 'mud items',
      description: '',
      link : '/',
    },

    {
      src: '/images/statues.jpg',
      alt: 'statues',
      description: '',
      link : '/',
    },

  ];

  const handleImageClick = (link) => {
    // Navigate to the link or show more details
    window.location.href = link; // Example: Redirects to another page
  };

    return (
        <div>
          <div className="landingPage">

            {/* conditionally render "upload an item" */}
            {
              isSeller && (
                <div>
                  <button>
                    Upload an Item
                  </button>
                </div>
              )
            }

            <h1>Welcome to Nepal Nirvana</h1>
            <p>Explore the best of Nepal's heritage and culture.</p>

            <div className="slidingImages">
              <Slider {...sliderSettings}>
                {images.map((image, index) => (
                  <div key={index} onClick={() => handleImageClick(image.link)}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      
                    />
                  
                  </div>
              ))}
              </Slider>
            </div>
          </div>
        </div>
    );
};

export default LandingPage;