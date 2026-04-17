import React, { useState } from "react";
import { Link } from "react-router";
import "../theme/CSS/UserNavbar.css";
import {
  faCartShopping,
  faGauge,
  faShoppingBag,
  faSignOut,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="user-nav">
      <div className="desktop-nav">
        {/* Logo */}
        <div>
          <Link to="/" className="logo">
            <h3>
              ReeDin <span>Fashion</span>
            </h3>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-menu desktop">
          <li>
            <Link to="/user/" className="nav-link">
              <FontAwesomeIcon icon={faGauge} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/user/shop" className="nav-link">
              <FontAwesomeIcon icon={faShoppingBag} />
              Shop Products
            </Link>
          </li>
          <li>
            <Link to="/user/about" className="nav-link">
              <span className="nav-icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/user/cart" className="nav-link">
              <FontAwesomeIcon icon={faCartShopping} />
              Cart
            </Link>
          </li>
          <li>
            <button className="logout-btn ">
              <FontAwesomeIcon icon={faSignOut} />
              Logout
            </button>
          </li>
        </ul>
        {/* Right Section - Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {/* Mobile Hamburger */}

        <button
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-nav-menu">
            <li>
              <Link
                to="/user/"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faGauge} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/user/shop"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faShoppingBag} />
                Shop Products
              </Link>
            </li>
            <li>
              <Link
                to="/user/about"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUserCircle} />
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/user/cart"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Cart
              </Link>
            </li>
            <li>
              <button
                className="logout-btn mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faSignOut} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
