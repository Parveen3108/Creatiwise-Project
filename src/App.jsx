import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/AddToCart"
import CheckoutPage from "./Pages/CheckoutPage";
// import Headers from "./Pages/Headers";
import Success from "./pages/Success";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<Success />} />
        {/* <Route path="/success" element={<Success />} /> */}
      </Routes>
  );
}

export default App;
