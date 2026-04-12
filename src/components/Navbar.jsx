import React, { useCallback, useState } from "react";
import { Link } from "react-router";
import "../CSS/Navbar.css";
import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
    console.log(`The sidebar is ${isOpen ? "open" : "closed"}`);
  }, [isOpen]);

  return (
    <>
      <nav className="main-nav">
        <div className="logo-container">
          <button className="menu" onClick={handleSidebar}>
            m
          </button>
          <p className="logo">
            Jepro <span>Mart</span>
          </p>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/login"}>Log in</Link>
          <Link to={"/register"}>Sign up</Link>
        </div>
        <Search />
      </nav>

      {/* Mobile View */}
      <nav
        className={isOpen ? "mobile sidebar-open" : "sidebar-closed"}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={isOpen ? "nav-content" : "nav-content-closed"}
          tabIndex={-1}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="logo-container">
            <p className="logo">
              Jepro <span>Mart</span>
            </p>
          </div>
          <Search />

          <div className="mobile-links">
            <hr />
            <Link to="/home">Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/login"}>Log in</Link>
            <Link to={"/register"}>Sign up</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
