"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, getCartTotal, user } =
    useCart();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-black">
        <h1 className="text-2xl font-bold mb-4">
          Please sign in to view your cart
        </h1>
        <Link
          href="/signIn"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          Sign In
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          className="bi bi-cart-x text-gray-400 mb-4"
          viewBox="0 0 16 16"
        >
          <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link
          href="/"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-10 text-black min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white rounded-xl shadow-md p-4 gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{item.name}</h2>
              {item.extras && item.extras.length > 0 && (
                <p className="text-sm text-gray-500">
                  Extras: {item.extras.join(", ")}
                </p>
              )}
              {item.removed && item.removed.length > 0 && (
                <p className="text-sm text-gray-500">
                  Removed: {item.removed.join(", ")}
                </p>
              )}
              <p className="text-green-600 font-bold">{item.price} SAR</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-gray-100 rounded-xl p-6">
        <div className="flex justify-between text-xl font-bold mb-4">
          <span>Total:</span>
          <span className="text-green-600">{getCartTotal()} SAR</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition"
          >
            Clear Cart
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition flex-1">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
