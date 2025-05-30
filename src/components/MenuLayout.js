import React, { useRef } from "react";
import MenuSidebar from "./MenuSidebar";
import DishCard from "./DishCard";
import ViewCartBar from "./ViewCartBar";
import CartModal from "./CartModal";
import { useSelector } from "react-redux";
import "../styles/MenuLayout.css";

const MenuLayout = () => {
  const isNavOpen = useSelector((state) => state.nav.isOpen);
  const dishCardRef = useRef();

  const handleDishClick = (dishId) => {
    if (dishCardRef.current) {
      dishCardRef.current.scrollToDish(dishId);
    }
  };

  return (
<div className="menu-layout">
      <div className="menu-wrapper">
        <MenuSidebar onDishClick={handleDishClick} />
        <DishCard ref={dishCardRef} />
      </div>
      <ViewCartBar />
      <CartModal />
      </div>
  );
};

export default MenuLayout;