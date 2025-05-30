import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal, incrementQty, decrementQty } from "../redux/cartSlice";
import "../styles/CartModal.css";

const CartModal = () => {
  const { showModal, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!showModal) return null;

  return (
<div className="cart-modal">
  <button className="close-modal" onClick={() => dispatch(toggleModal())}>×</button>
  <div className="cart-content">
    <h2 className="cart-title">Your Cart</h2>
    {items.map((item) => (
      <div key={item.id} className="cart-item">
        <span className="cart-item-name">{item.name}</span>
        <div className="cart-item-controls">
          <button className="cart-inc-dec-btn" onClick={() => dispatch(decrementQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button className="cart-inc-dec-btn" onClick={() => dispatch(incrementQty(item.id))}>+</button>
        </div>
        <span className="cart-item-price">₹{item.price * item.quantity}</span>
      </div>
    ))}
    <button className="place-order-btn">Place Order</button>
  </div>
</div>

  );
};

export default CartModal;