import { Route, Routes } from "react-router";
import { HomePage } from "./components/HomePage/HomePage";
import "./App.css";
import { CheckoutPage } from "./components/Checkout/CheckoutPage";
import { OrderPage } from "./components/OrderPage/OrderPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
