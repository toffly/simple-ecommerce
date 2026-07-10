import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import "./App.css";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";

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
