import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const [selectedPack, setSelectedPack] = useState(1);
   const [activeTab, setActiveTab] = useState("benefits");
  const [frequency, setFrequency] = useState("1 Month");
  const [open, setOpen] = useState(null);
  
  const navigate = useNavigate();

  const packs = [
    { id: 1, name: "1 Bottle", price: 684 },
    { id: 2, name: "2 Bottles", price: 1200 },
    { id: 3, name: "3 Bottles", price: 1700 },
  ];

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      pack: packs.find((p) => p.id === selectedPack),
      frequency,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart ✅");
  };

  const toggle = (sec) => {
    setOpen(open === sec ? null : sec);
  };

  // max-w-6xl
  return (
    <div className="w-full mx-auto">
      {/* TOP GRID */}
      <div className="grid md:grid-cols-2 gap-10 p-10">
        {/* LEFT SIDE */}
        <div>
          <img src="/img/OIP.webp" className="rounded-lg w-full mb-4" />

          <div className="flex gap-3">
            <img src="/img/OIP (1).webp" className="w-20 border rounded" />
            <img src="/img/OIP (2).webp" className="w-20 border rounded" />
            <img src="/img/OIP (3).webp" className="w-20 border rounded" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-2xl font-bold">Roots Beard Oil - 100ML</h1>

          <p className="text-yellow-500 mt-1">⭐⭐⭐⭐⭐ (48 reviews)</p>

          <p className="text-gray-600 mt-2">
            Nourishing Beard Oil helps to grow & smooth beard.
          </p>
           <div className="mt-10">

      <h3 className="text-lg font-semibold mb-4">
        Why It Works:
      </h3>

      <div className="bg-white rounded-xl shadow-md">

        {/* TABS */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("ingredients")}
            className={`w-1/2 py-3 text-sm rounded-tl-xl
            ${activeTab==="ingredients"
              ? "bg-black text-white"
              : "bg-gray-100"}`}
          >
            Key Ingredients
          </button>

          <button
            onClick={() => setActiveTab("benefits")}
            className={`w-1/2 py-3 text-sm rounded-tr-xl
            ${activeTab==="benefits"
              ? "bg-black text-white"
              : "bg-gray-100"}`}
          >
            Product Benefits
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-4 text-sm text-gray-700">

          {activeTab === "benefits" && (
            <>
              <p>✅ <b>Deep Hydration:</b> Locks in moisture to prevent dryness.</p>
              <p>✅ <b>Nourishing & Strengthening:</b> Supports healthier beard growth.</p>
              <p>✅ <b>Natural Origins:</b> Premium oils for a clean finish.</p>
              <p>✅ <b>Tailored Scents:</b> 100% essential oil blends.</p>
            </>
          )}

          {activeTab === "ingredients" && (
            <>
              <p>🌿 Jojoba Oil – Hydrates & softens beard.</p>
              <p>🌿 Argan Oil – Repairs damaged hair.</p>
              <p>🌿 Vitamin E – Promotes growth.</p>
              <p>🌿 Almond Oil – Adds shine.</p>
            </>
          )}

        </div>

      </div>
    </div>
 

          {/* PACKAGES */}
          <h3 className="font-semibold mt-6">Choose Package</h3>

          {packs.map((pack) => (
            <div
              key={pack.id}
              onClick={() => setSelectedPack(pack.id)}
              className={`border p-4 rounded-lg mt-3 cursor-pointer
              ${selectedPack === pack.id && "border-black border-2 bg-green-100"}`}
            >
              <div className="flex justify-between">
                <span>{pack.name}</span>
                <span>₹{pack.price}</span>
              </div>
            </div>
          ))}

          {/* DELIVERY FREQUENCY */}
          <h3 className="font-semibold mt-6">Select Delivery Frequency</h3>

          <div className="flex gap-3 mt-3">
            {["1 Month", "2 Months", "3 Months"].map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                className={`border px-4 py-2 rounded
                ${frequency === f && "bg-black text-white"}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto mt-12">
            {/* SAVE BOX */}
            <div className="bg-orange-100 text-center py-3 rounded">
              🎉 Congrats, you're saving 20%
            </div>

            {/* PAYMENT */}
            <p className="text-center text-xs mt-3">
              🔒 All transactions secured and encrypted
            </p>

            {/* DELIVERY INFO */}
            <div className="bg-black text-white p-4 rounded mt-4 text-center text-sm">
              🚚 Expected delivery in 3–4 business days
              <br />
              <span className="text-gray-300">
                Shipped from the British Isles
              </span>
            </div>

            {/* BUTTONS */}
            <button
              onClick={addToCart}
              className="bg-orange-500 text-white w-full py-3 rounded-lg mt-6"
            >
              Add to Cart
            </button>

            <button
            onClick={() => navigate("/checkout")}
            className="bg-black text-white w-full py-3 rounded-lg mt-3">
              Buy Now
            </button>

            {/* ACCORDION */}
            <div className="mt-8 space-y-4">
              {["Description", "Ingredients", "Why Subscribe?"].map((sec) => (
                <div key={sec} className="border-b pb-3">
                  <div
                    onClick={() => toggle(sec)}
                    className="flex justify-between cursor-pointer"
                  >
                    <span>{sec}</span>
                    <span>⌄</span>
                  </div>

                  {open === sec && (
                    <p className="text-gray-600 mt-2 text-sm">
                      Sample content for {sec}.
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
            {/* AS SEEN ON */}
            <div className="text-center mt-12">
              <p className="text-xl mb-4">As Seen On</p>

              <div className="flex justify-center gap-15 text-3xl font-semibold">
                <span>askmen</span>
                <span className="text-red-600">Men'sHealth</span>
                <span>The Telegraph</span>
              </div>
            </div>

      {/* ================== BOTTOM SECTION ================== */}

      <div className="bg-[#E8D8C3] mt-16 p-10 w-full rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What Makes Our Roots Beard Oil Unique?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">
                Born, Brewed & Bottled in Brentford
              </h4>
              <p className="text-sm text-gray-700">
                With globally sourced ingredients, we handcraft every batch in
                the British Isles.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">No Cheap Tricks, No Fillers</h4>
              <p className="text-sm text-gray-700">
                We reject watered-down products and artificial shortcuts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Nutrient Heavyweight Formula</h4>
              <p className="text-sm text-gray-700">
                Ingredients like Jojoba, Argan & more deliver real results.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Bigger Bottle, Better Value</h4>
              <p className="text-sm text-gray-700">
                100ml bottle gives 3X more than standard oils.
              </p>
            </div>
          </div>

          {/* PRODUCT IMAGES */}
          <div className="flex justify-center gap-4">
            <img src="/img/OIP.webp" className="w-20 md:w-28" />
            <img src="/img/OIP (1).webp" className="w-20 md:w-28" />
            <img src="/img/OIP (2).webp" className="w-20 md:w-28" />
          </div>
        </div>
      </div>

      {/* ================= REVIEWS ================= */}

      <div className="text-center mt-16">
        <p className="text-yellow-500">⭐⭐⭐⭐⭐ We're 5 Star Rated</p>

        <h2 className="text-2xl font-semibold mt-2">52,324 Happy Beards</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="border p-4 rounded-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-2 text-sm">
              Excellent service. Beard feels softer.
            </p>
            <p className="text-xs mt-2 text-gray-500">Verified buyer</p>
          </div>

          <div className="border p-4 rounded-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-2 text-sm">Fresh and invigorating scent.</p>
            <p className="text-xs mt-2 text-gray-500">Verified buyer</p>
          </div>

          <div className="border p-4 rounded-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-2 text-sm">Love it! Best oil I've tried.</p>
            <p className="text-xs mt-2 text-gray-500">Verified buyer</p>
          </div>
        </div>
      </div>

      {/* ================= FAQ ================= */}

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>

        {[
          "How do I start a beard care routine?",
          "What's the difference between beard oil and beard balm?",
          "How often should I use beard oil?",
          "Are your products made in the UK?",
          "Are your products tested for safety?",
        ].map((q, i) => (
          <div key={i} className="border-b py-4 flex justify-between">
            <span>{q}</span>
            <span>+</span>
          </div>
        ))}
      </div>
      {/* ================= FOOTER ================= */}

<footer className="bg-gray-100 mt-20 pt-12 pb-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">

    {/* LEFT */}
    <div>
      <h2 className="text-xl font-semibold">
        Join the tribe and get 10% off
      </h2>

      <p className="text-sm text-gray-600 mt-2">
        Receive a special offer and updates on new launches.
      </p>

      <div className="flex mt-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border px-4 py-2 rounded-l-full w-full"
        />

        <button className="bg-black text-white px-6 rounded-r-full">
          Get Offer
        </button>
      </div>

      {/* SOCIAL */}
      <div className="flex gap-4 mt-6 text-xl">
        <span>📘</span>
        <span>📸</span>
        <span>▶️</span>
        <span>🎵</span>
        <span>✖️</span>
      </div>
    </div>

    {/* SHOP LINKS */}
    <div>
      <h4 className="font-semibold mb-3">Shop Now</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Beard Oil</li>
        <li>Beard Balm</li>
        <li>Beard Soap Bars</li>
        <li>Beard Bundles</li>
        <li>Beard Comb</li>
      </ul>
    </div>

    {/* USEFUL */}
    <div>
      <h4 className="font-semibold mb-3">Useful Links</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Get in touch</li>
        <li>Shipping & Returns</li>
        <li>FAQs</li>
      </ul>
    </div>

    {/* POLICIES */}
    <div>
      <h4 className="font-semibold mb-3">Policies</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
    © 2025, The Rugged Beard Co.
  </div>

</footer>

    </div>
  );
}
