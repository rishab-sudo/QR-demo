import React, { useRef } from "react";
import Header from "./components/Header";
import Sidebar from "./components/MenuSidebar";
import DishCard from "./components/DishCard";
import CartModal from "./components/CartModal";
import BottomCartBar from "./components/BottomCartBar"; // ✅ import this
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const menu = useSelector((state) => state.menu);
  const dishRefs = useRef({});

  const scrollToDish = (dishName) => {
    const ref = dishRefs.current[dishName];
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
      <Sidebar scrollToDish={scrollToDish} />

      <main className="main-content">
        <div className="dish-card-wrapper">
          {menu.flatMap((category) =>
            category.subcategories.map((dish, index) => (
              <div
                key={index}
                ref={(el) => (dishRefs.current[dish.name] = el)}
              >
                <DishCard dish={dish} />
              </div>
            ))
          )}
        </div>
      </main>

      <BottomCartBar /> {/* ✅ Add this */}
      <CartModal />
    </div>
  );
}

export default App;
