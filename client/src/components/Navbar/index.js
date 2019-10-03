import React from "react";
import { Link } from "react-router-dom";

// import "./navbar.css";

function Navbar() {
  return (
    // <nav className="navbar navbar-light topNavbar">
    //   <Link className="navbar-brand" to="/">
    //     Go Green
    //   </Link>
    //   <ul className="navbar nav ml-auto">
    //     <li className="nav-item active">
    //       <Link to="/" className="nav-link">
    //         Home <span className="sr-only">(current)</span>
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/about" className="nav-link">
    //         About Us
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/product" className="nav-link">
    //         Product Gallery
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/testimonials" className="nav-link">
    //         Testimonials
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/contact" className="nav-link">
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    // --------------------------------------------

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/">
        Go Green
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/product">
              Product Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="//contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
