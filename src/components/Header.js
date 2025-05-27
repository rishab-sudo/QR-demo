import React, { useState } from "react";
import SlideNav from "./SlideNav";
import SearchBar from "./SearchBar";
import { FaBars, FaLeaf } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);

  return (
    <>
      <header className="header">
        <div className="left">
          <FaBars className="icon" onClick={() => setIsSidebarOpen(true)} />
          <img src="/hotel-logo.png" alt="Hotel Logo" className="hotel-logo" />
        </div>

        <SearchBar vegOnly={vegOnly} />

        <div className="right">
          <FaLeaf
            className={`icon ${vegOnly ? "active" : ""}`}
            onClick={() => setVegOnly(!vegOnly)}
            title="Veg Only"
          />
        </div>
      </header>

      <SlideNav isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
