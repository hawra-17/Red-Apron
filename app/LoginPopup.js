"use client";
import Link from "next/link";

export default function LoginPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[60]">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          className="bi bi-person-exclamation mx-auto mb-4 text-red-600"
          viewBox="0 0 16 16"
        >
          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Login Required
        </h2>
        <p className="text-gray-600 mb-6">
          Please sign in to add items to your cart
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/signIn"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-semibold"
          >
            Sign In
          </Link>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
