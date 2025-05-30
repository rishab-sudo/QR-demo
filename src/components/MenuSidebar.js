import React from "react";
import menuData from "../data/menuData";
import "../styles/MenuSidebar.css";

const MenuSidebar = ({ onDishClick }) => {
  const handleDishClick = (itemId) => {
    if (onDishClick) {
      onDishClick(itemId);
    }
  };

  return (
    <div className="menu-sidebar">
      <div className="menu-items-container">
        {menuData.map((category) => (
          <div key={category.category} className="menu-category">
            <h3>{category.category}</h3>
            {category.items.map((item) => (
              <p 
                key={item.id} 
                className="menu-subitem"
                onClick={() => handleDishClick(item.id)}
              >
                {item.name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSidebar;