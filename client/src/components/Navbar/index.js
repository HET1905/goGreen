import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light topNavbar" style={{ "backgroundColor": "#1A4314" }}>
      <ul className="navbar nav ml-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link">
            Product Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="nav-link">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
