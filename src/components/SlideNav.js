import React from "react";
import { FaQrcode, FaSignInAlt, FaUserTie } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Header.css";

const SlideNav = ({ onClose }) => {
  const isOpen = useSelector((state) => state.nav.isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="sidebar-content">
       <img src={require("../assets/QR-logo.png")} alt="Hotel Logo" className="hotel-logo" />

        <button className="sidebar-btn">
          <FaSignInAlt className="btn-icon" /> Login
        </button>

        <button className="sidebar-btn">
          <FaQrcode className="btn-icon" /> Scan QR
        </button>

        <button className="sidebar-btn vertical-icon">
          <FaUserTie className="btn-icon large" />
          Ping Captain
        </button>
      </div>
    </div>
  );
};

export default SlideNav;
