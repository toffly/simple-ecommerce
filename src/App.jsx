import { Route, Routes } from "react-router";
import { HomePage } from "./components/HomePage/HomePage";
import "./App.css";
import { CheckoutPage } from "./components/Checkout/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="checkout" element={<CheckoutPage/>}/>
    </Routes>
  );
}

export default App;
