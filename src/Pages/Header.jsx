import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* TOP NAVBAR */}
      <div className="flex justify-between items-center px-4 md:px-10 py-4 border-b">

        {/* LEFT */}
        <div className="hidden md:flex gap-6 text-sm">
          <span>Shop Now ▾</span>
          <span>About Us ▾</span>
          <span>Blog</span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        {/* LOGO */}
        <h1 className="font-bold text-lg md:text-xl tracking-wide">
          RUGGEDBEARD™
        </h1>

        {/* RIGHT */}
        <div className="flex gap-4 md:gap-6 text-sm items-center">
          <span className="hidden md:block text-orange-500 font-semibold">
            🏷 GET £10
          </span>

          <span className="hidden md:block">Accounts ▾</span>
          <span className="hidden md:block">Help ▾</span>

          <span>🔍</span>
          <Link to="/cart">🛒</Link>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b px-4 py-3 space-y-2 text-sm">
          <p>Shop Now</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Accounts</p>
          <p>Help</p>
        </div>
      )}

      {/* ORANGE BAR */}
      <div className="bg-orange-500 text-white text-xs md:text-sm flex flex-wrap justify-center gap-4 md:gap-10 py-2 text-center">
        <span>🚚 Free Shipping £30+</span>
        <span>🇬🇧 Handmade in UK</span>
      </div>

      {/* BREADCRUMB */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-10 py-4 text-xs md:text-sm text-gray-600 gap-2">

        <div className="flex gap-2 flex-wrap">
          <span>Home</span>
          <span>›</span>
          <span>All products</span>
          <span>›</span>
          <span className="text-black font-medium">
            Roots Beard Oil
          </span>
        </div>

        <span className="bg-orange-200 text-orange-700 px-3 py-1 rounded-full text-xs">
          Best Seller
        </span>

      </div>

    </div>
  );
}
