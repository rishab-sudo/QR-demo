import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartModal } from "../redux/cartSlice";
import "../styles/BottomCartBar.css";

const BottomCartBar = () => {
  const dispatch = useDispatch();
  const { items, showBottomBar } = useSelector(state => state.cart);

  if (!showBottomBar || items.length === 0) return null;

  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="bottom-cart-bar">
      <div className="cart-info">
        <span>{items.length} items</span>
        <span>₹{total}</span>
      </div>
      <button className="view-cart-btn" onClick={() => dispatch(toggleCartModal())}>
        View Cart
      </button>
    </div>
  );
};

export default BottomCartBar;
