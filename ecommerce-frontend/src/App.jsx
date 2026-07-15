import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import "./App.css";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product"); //?expand=product is query parameter add additional info to the request
      setCart(response.data);
    };

  useEffect(() => {
    loadCart()
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
    </Routes>
  );
}

export default App;
