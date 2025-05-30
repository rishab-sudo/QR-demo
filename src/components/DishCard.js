import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import menuData from "../data/menuData";
import "../styles/DishCard.css";

const DishCard = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const dishRefs = useRef({});

  // Function to get ref for a dish
  const getDishRef = (id) => {
    if (!dishRefs.current[id]) {
      dishRefs.current[id] = React.createRef();
    }
    return dishRefs.current[id];
  };

  // Expose refs to parent components
  React.useImperativeHandle(ref, () => ({
    scrollToDish: (id) => {
      const dishRef = dishRefs.current[id];
      if (dishRef && dishRef.current) {
        dishRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }));

  return (
    <div className="main-dish-cart">
      <div className="dish-items-container">
        {menuData.map((category) =>
          category.items.map((item) => (
            <div 
              key={item.id} 
              className="dish-card"
              ref={getDishRef(item.id)}
              id={`dish-${item.id}`}
            >
              <h4>{item.name}</h4>
              <p className="description">{item.description}</p>
              <div className="bottom-row w-100">
                <span className="price">₹{item.price}</span>
                <button onClick={() => dispatch(addToCart(item))}>+ Add</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
});

export default DishCard;