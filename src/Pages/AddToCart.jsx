import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    const withQty = data.map(item => ({ ...item, qty: item.qty || 1 }));
    setCart(withQty);
  }, []);

  // Update Qty
  const updateQty = (index, type) => {
    const updated = [...cart];

    if (type === "inc") updated[index].qty += 1;
    if (type === "dec" && updated[index].qty > 1)
      updated[index].qty -= 1;

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.pack.price * item.qty,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Your Cart 🛒
      </h1>

      {cart.length === 0 && (
        <p>Your cart is empty 😢</p>
      )}

      {cart.map((item, i) => (
        <div
          key={i}
          className="border p-4 rounded-lg mb-4 flex justify-between items-center"
        >
          <div>
            <h2 className="font-semibold">
              Roots Beard Oil
            </h2>
            <p>{item.pack.name}</p>
            <p>Delivery: {item.frequency}</p>
            <p>₹{item.pack.price}</p>
          </div>

          {/* QTY */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQty(i,"dec")}
              className="border px-3"
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() => updateQty(i,"inc")}
              className="border px-3"
            >
              +
            </button>

            <button
              onClick={() => removeItem(i)}
              className="text-red-500 ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      <h2 className="text-xl font-bold mt-6">
        Total: ₹{total}
      </h2>

      <button
        onClick={() => navigate("/checkout")}
        className="bg-black text-white w-full py-3 mt-4 rounded-lg"
      >
        Proceed to Checkout
      </button>

    </div>
  );
}
