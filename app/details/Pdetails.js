"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../CartContext";
import { useRouter } from "next/navigation";
import LoginPopup from "../LoginPopup";

export default function Details({ name, image, price, onClose }) {
  const { addToCart, user } = useCart();
  const router = useRouter();
  const [extras, setExtras] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleExtraChange = (item, checked) => {
    if (checked) {
      setExtras([...extras, item]);
    } else {
      setExtras(extras.filter((e) => e !== item));
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      setShowLoginPopup(true);
      return;
    }

    addToCart({
      name,
      image,
      price,
      extras,
    });

    onClose();
  };

  // the noly add that chat gpt made it is onclose
  return (
    <>
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        {/* for making the card  */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 ">
          <img src={image} alt={name} className="w-full rounded-md mb-4" />
          <h2 className="text-2xl font-bold mb-2">{name}</h2>

          <div className="flex flex-col">
            <p>add extra items ? </p>
            <div className="flex items-center gap-x-2">
              <input
                name="extraCheese"
                type="checkbox"
                className="rounded-2xl gap-x-2"
                onChange={(e) => handleExtraChange("Cheese", e.target.checked)}
              />
              <label htmlFor="extraCheese" className="gap-x-2">
                Cheese
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                name="extraSauce"
                type="checkbox"
                className="rounded-2xl gap-x-2"
                onChange={(e) => handleExtraChange("Sauce", e.target.checked)}
              />
              <label htmlFor="extraSauce" className="gap-x-2">
                Sauce
              </label>
            </div>
          </div>

          <p className="text-lg mb-4">Price: {price} SAR</p>

          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition gap-x-10 mr-3"
          >
            Add to cart
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
