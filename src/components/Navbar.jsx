import React, { useState } from "react";
import search from "../assets/search.png";
import view from "../assets/view.png";
import hide from "../assets/hide.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ NEW

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Carify Logo" />
          <span>Carify.com</span>
        </div>

        {/* Hamburger */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* NAV CONTENT */}
        <div className={`nav-content ${menuOpen ? "active" : ""}`}>
          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => {
                    document
                      .getElementById("explore")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Explore
              </Link>
            </li>

            <li>
              <Link to="/track" onClick={() => setMenuOpen(false)}>
                Track Your Order
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="Searchbar">
            <input type="text" placeholder="Search" />
            <button className="srchbtn">
              <img src={search} alt="search" />
            </button>
          </div>

          {/* Actions */}
          <div className="actions">
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <>
                <button onClick={() => setShowLogin(true)}>Login</button>
                <button onClick={() => setShowSignup(true)}>Signup</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-box">
            <h3>Login</h3>

            <input type="email" placeholder="Email" />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? view : hide} alt="eye" />
              </button>
            </div>

            <button
              onClick={() => {
                setIsLoggedIn(true);
                setShowLogin(false);
              }}
            >
              Login
            </button>

            <button onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal">
          <div className="modal-box">
            <h3>Signup</h3>

            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? view : hide} alt="eye" />
              </button>
            </div>

            <button
              onClick={() => {
                setIsLoggedIn(true);
                setShowSignup(false);
              }}
            >
              Register
            </button>

            <button onClick={() => setShowSignup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
