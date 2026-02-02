import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.pack.price * item.qty,
    0
  );

  const placeOrder = () => {
    localStorage.removeItem("cart");
    navigate("/success");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      {/* CART SUMMARY */}
      {cart.map((item,i) => (
        <div key={i} className="border p-4 rounded mb-3">
          <h2 className="font-semibold">
            {item.product}
          </h2>
          <p>{item.pack.name}</p>
          <p>Delivery: {item.delivery}</p>
          <p>Qty: {item.qty}</p>
          <p>₹{item.pack.price}</p>
        </div>
      ))}

      {/* TOTAL */}
      <h2 className="text-xl font-bold mt-4">
        Total: ₹{total}
      </h2>

      {/* FAKE PAYMENT FORM */}
      <div className="mt-6 space-y-3">

        <input
          placeholder="Full Name"
          className="border p-3 w-full rounded"
        />

        <input
          placeholder="Address"
          className="border p-3 w-full rounded"
        />

        <input
          placeholder="Card Number"
          className="border p-3 w-full rounded"
        />

      </div>

      <button
        onClick={placeOrder}
        navigate="/success "
        className="bg-black text-white w-full py-3 mt-6 rounded-lg"
      >
        Place Order
      </button>

    </div>
  );
}
