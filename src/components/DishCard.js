import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/cartSlice'; // ✅ correct

import "../styles/DishCard.css";

const DishCard = ({ dish }) => {
  const dispatch = useDispatch();

  return (
    <div className="dish-card">
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <div className="dish-footer">
        <span className="price">₹{dish.price}</span>
        <button className="add-btn" onClick={() => dispatch(addToCart(dish))}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default DishCard;
