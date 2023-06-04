import React from "react";
import "./Navbar.css"; // Import the CSS file for Navbar component

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My App</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
