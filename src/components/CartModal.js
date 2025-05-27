// components/CartModal.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  toggleCartModal,
  confirmOrder
} from "../redux/cartSlice";
import "../styles/CartModal.css";

const CartModal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isOpen = useSelector(state => state.cart.showCartModal);

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={() => dispatch(toggleCartModal())}>×</button>
      </div>

      <div className="cart-body">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-left">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <span className={`veg-icon ${item.veg ? "veg" : "non-veg"}`} />
            </div>
            <div className="cart-right">
              <p>₹{item.price}</p>
              <div className="qty-controls">
                <button onClick={() => dispatch(decrement(item.name))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increment(item.name))}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="confirm-bar">
        <button onClick={() => dispatch(confirmOrder())}>
          Confirm Order ₹{total}
        </button>
      </div>
    </div>
  );
};

export default CartModal;
