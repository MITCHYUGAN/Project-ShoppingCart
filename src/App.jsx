import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  const [ItemsInCart, setItemsInCart] = useState([]);

  return (
    <>
      <Navbar ItemsInCart={ItemsInCart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={
            <ShopPage
              ItemsInCart={ItemsInCart}
              setItemsInCart={setItemsInCart}
            />
          }
        />
        <Route path="/cart" element={<CartPage ItemsInCart={ItemsInCart} />} />
      </Routes>
    </>
  );
}

export default App;
