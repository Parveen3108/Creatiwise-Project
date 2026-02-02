import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Success() {
  // const navigate = useNavigate();

  // Clear cart on success
  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">

      {/* ICON */}
      <div className="text-6xl mb-4">
        🎉
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-green-600">
        Order Successful!
      </h1>

      <p className="mt-3 text-gray-600">
        Thank you for your purchase 😊
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Your order will be delivered soon.
      </p>

      {/* BUTTON */}
      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-lg mt-6"
      >
        Continue Shopping
      </Link>

    </div>
  );
}
