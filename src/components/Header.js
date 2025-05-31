import React, { useState } from "react";
import SlideNav from "./SlideNav";
import SearchBar from "./SearchBar";
import { FaBars, FaLeaf, FaCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../redux/navSlice";
import "./Header.css";

const Header = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <div className="left">
          <FaBars className="icon" onClick={() => dispatch(setNavOpen(true))} />
          <img src={require("../assets/QR-logo.png")} alt="Hotel Logo" className="hotel-logo" />
        </div>

        <SearchBar vegOnly={vegOnly} />

        <div className="right">
          <div className="veg-toggle" onClick={() => setVegOnly(!vegOnly)}>
            <div className="veg-option">
              <span className="veg-label">Veg Only</span>
              <FaLeaf className={`icon veg-icon ${vegOnly ? "active" : ""}`} />
            </div>
            <div className="non-veg-option">
              <span className="non-veg-label">Non-Veg</span>
              <FaCircle className={`icon non-veg-icon ${!vegOnly ? "active" : ""}`} />
            </div>
          </div>
        </div>
      </header>

      <SlideNav onClose={() => dispatch(setNavOpen(false))} />
    </>
  );
};

export default Header;
