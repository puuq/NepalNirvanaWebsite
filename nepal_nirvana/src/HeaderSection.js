import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const selectRef = useRef(null);

  // State to handle multiple dropdowns
  const [dropdownsVisible, setDropdownsVisible] = useState({
    more: false,
    explore: false,
  });

  // Function to toggle a specific dropdown
  const toggleDropdown = (dropdownKey) => {
    setDropdownsVisible((prev) => ({
      ...prev,
      [dropdownKey]: !prev[dropdownKey],
    }));
  };

  // Function to hide a specific dropdown (used for blur or mouse leave)
  const hideDropdown = (dropdownKey) => {
    setDropdownsVisible((prev) => ({
      ...prev,
      [dropdownKey]: false,
    }));
  };

  // Resize the select box dynamically
  useEffect(() => {
    const resizeSelect = (selectElement) => {
      const tempElement = document.createElement("span");
      tempElement.style.visibility = "hidden";
      tempElement.style.position = "absolute";
      tempElement.style.fontSize = window.getComputedStyle(selectElement).fontSize;
      tempElement.style.fontFamily = window.getComputedStyle(selectElement).fontFamily;
      tempElement.style.whiteSpace = "nowrap";
      tempElement.innerText = selectElement.options[selectElement.selectedIndex].text;

      document.body.appendChild(tempElement);

      const width = tempElement.offsetWidth + 40; // Adding padding
      selectElement.style.width = width + "px";

      document.body.removeChild(tempElement);
    };

    const selectElement = selectRef.current;
    const handleResize = () => resizeSelect(selectElement);
    handleResize(); // Initial adjustment

    selectElement.addEventListener("change", handleResize);

    return () => selectElement.removeEventListener("change", handleResize);
  }, []);



  //Function for sidebar

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="headerContainer">
      <div className="searchbarContainer">
        <div className="headerLogo">NepalNirvana</div>
        <div className="headerTitle">
          <p>Discover Nepal's Timeless Heritage</p>
        </div>

        <div className="searchBar">
          <select className="categorySelect" id="categorySelect" ref={selectRef}>
            <option value="All">All</option>
            <option value="Authentic Nepali Tea">Authentic Nepali Tea</option>
            <option value="Bronze Statues">Bronze Statues</option>
            <option value="Hand-Knitted Scarves">Hand-Knitted Scarves</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Shawls">Shawls</option>
            <option value="Scarves">Scarves</option>
            <option value="Thangka Paintings">Thangka Paintings</option>
            <option value="Wooden Carvings">Wooden Carvings</option>
          </select>

          <input type="text" placeholder="Search on NepalNirvana" className="searchInput" />

          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="loginSignupLabel">
          <Link href="#" className="loginSignupLink">
            Login / Signup
          </Link>
        </div>

        <div className="sellerLabel">
          <Link href="#" className="sellerLink">
            Become a Seller
          </Link>
        </div>

        {/* More Dropdown */}
        <div
          className="moreLabelDropdown"
          onBlur={() => hideDropdown("more")}
        >
          <a
            href="#"
            className="dropdownToggle"
            onClick={() => toggleDropdown("more")}
          >
            More
          </a>

          {dropdownsVisible.more && (
            <div className="dropdownMenu">
              <Link href="#">About Us</Link>
              <Link href="#">About NepalNirvana</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Feedback</Link>
              <Link href="#">FAQs</Link>
            </div>
          )}
        </div>

        <div className="changeLanguageLabel">
          <a href="#">Change Language</a>
        </div>
      </div>

      <div className="navBar" id="navBar">

      <div>
      {/* Button to open the sidebar */}
      <button className="openSidebarBtn" onClick={toggleSidebar}>
        All  <FontAwesomeIcon icon={faBarsStaggered} />
      </button> 

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebarHeader">
          <h2>Hello, Sign In</h2>
          <button className="closeSidebarBtn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>

        <div className="sidebarContent">
          <h3>Handicrafts</h3>
          <ul>
            <li>Pashmina Shawls</li>
            <li>Wooden Carvings</li>
            <li>Jewelry</li>
          </ul>

          <h3>Arts and Culture</h3>
          <ul>
            <li>Artworks</li>
            <li>Oil Paintings</li>
            <li>Thangka Paintings</li>
            <li>Cultural Workshops</li>
          </ul>

          <h3>Tours and Experiences</h3>
          <ul>
            <li>Trekking Routes</li>
            <li>Cultural Festivals</li>
            <li>Local Guides</li>
            
          </ul>

          <h3>Help and Settings</h3>
          <ul>
            <li>Your Account</li>
            <li>Change Language</li>
            <li>Customer Service</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
    </div>

        <Link to="/" className="navContent">
          Home
        </Link>

        {/* Explore Dropdown */}
        <div
          className="exploreNavDropdown"
          onMouseEnter={() => toggleDropdown("explore")}  //shows dropdown on hover
          onMouseLeave={() => hideDropdown("explore")}    //hides dropdown when mouse leaves
        >
          <Link to="/explore" className="navContent">
            Explore
          </Link>
          {dropdownsVisible.explore && (
            <div className="dropdownMenu">
              <Link to="#">Artifacts</Link>
              <Link to="#">Culture</Link>
              <Link to="#">Nature</Link>
              <Link to="#">Food</Link>
            </div>
          )}
        </div>

        <Link to="/about" className="navContent">
          About
        </Link>
        <Link to="/" className="navContent"></Link>
      </div>
    </div>
  );
};

export default HeaderSection;
