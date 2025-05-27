import React from "react";
import { useSelector } from "react-redux";
import "../styles/MenuSidebar.css";

const MenuSidebar = ({ scrollToDish }) => {
  const menu = useSelector((state) => state.menu);

  return (
    <div className="menu-sidebar">
      {menu.map((category, index) => (
        <div key={index} className="menu-category">
          <h3>{category.category}</h3>
          {category.subcategories.map((dish, idx) => (
            <div
              key={idx}
              className="menu-item"
              onClick={() => scrollToDish(dish.name)}
            >
              {dish.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuSidebar;
