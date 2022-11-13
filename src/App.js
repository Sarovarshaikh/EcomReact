import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./Global/ProductContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import CartContextProvider from "./Global/CartContext";
function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
        <Router>
          <Navbar />
          {/* <Banner /> */}
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </Router>
        </CartContextProvider>
       </ProductContextProvider>
    </div>
  );
}

export default App;
