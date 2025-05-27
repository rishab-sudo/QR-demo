import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

const SearchBar = ({ vegOnly }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/menu?search=${query}&vegOnly=${vegOnly}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.error("Error fetching data", err));
    }
  }, [query, vegOnly]);

  return (
    <div className="search-bar">
      <div className="search-input-box">
        <span className="fixed-label">Dine In Table: 2</span>
        <div className="divider" />
        <input
          type="text"
          placeholder="Search menu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
