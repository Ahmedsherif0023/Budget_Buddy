import React from "react";
import "./Navbar.css";
import logo from "/favicon2.png";
import { FaHome, FaMoneyBillAlt, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <div className="navbar-brand">
            <img src={logo} alt="logo" />
            <h1>Budget Buddy</h1>
        </div>
      </a>
      <ul className="navbar-links">
        <li>
          <a  href="/">
            <FaHome />
            <label>Home</label>
          </a>
        </li>
        <li>
          <a href="/expenses">
            <FaMoneyBillAlt />
            <label>Expenses</label>
          </a>
        </li>
        <li>
          <a href="/profile">
            <FaUser /> <label>Profile</label>
          </a>
        </li>
      </ul>
      <div className="navbar-settings">
        <a  href="/settings">
          <FaGear />
          <label>Settings</label>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
