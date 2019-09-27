import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light topNavbar" >
      <Link className="navbar-brand" to="/">
            Go Green
           </Link>
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
          <Link to="/testimonials" className="nav-link">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    // --------------------------------------------

    // <div className="navbar navbar-default navbar-fixed-top" role="navigation">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle"
    //         data-toggle="collapse"
    //         data-target=".navbar-collapse"
    //       >
    //         <span className="sr-only">Toggle navigation</span>
    //         <span className="icon-bar"></span>
    //         <span className="icon-bar"></span>
    //         <span className="icon-bar"></span>
    //       </button>

    //       <Link className="navbar-brand" to="/">
    //         Go Green
    //       </Link>
    //     </div>
    //     <div className="navbar-collapse collapse">
    //       <ul className="nav navbar-nav navbar-right">
    //         <li className="active">
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li className="active">
    //           <Link to="/about">About Us</Link>
    //         </li>
    //         <li className="active">
    //           <Link to="/product">Product Gallery</Link>
    //         </li>
    //         <li className="active">
    //           <Link to="/testimonials">Testimonials</Link>
    //         </li>
    //         <li className="active">
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
