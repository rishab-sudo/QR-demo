import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../redux/cartSlice";
import "../styles/ViewCartBar.css";

const ViewCartBar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleViewCart = () => {
    dispatch(toggleModal());
  };

  if (totalItems === 0) return null;

  return (
    <div className="view-cart-bar">
      <div className="cart-info">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span className="item-quantity">x{item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total-info">
          {/* <span className="total-items">{totalItems} items</span> */}
          <span className="total-amount">₹{totalAmount.toFixed(2)}</span>
        </div>
        <button className="view-cart-btn" onClick={handleViewCart}>
          View Cart
        </button>
      </div>
    </div>
  );
};

export default ViewCartBar;