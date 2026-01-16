"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";
import { supabase } from "./Config/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, getCartCount } = useCart();
  const cartCount = getCartCount();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="flex items-center p-2 sticky top-0 text-black bg-white z-40">
      {/* Logo and links */}
      <div className="flex items-center gap-x-4 text-2xl font-bold">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" height={80} width={80} />
        </Link>
        <p>Red Apron</p>
      </div>

      {/* Cart and Person Icon pushed to the right */}
      <div className="ml-auto flex items-center gap-x-4">
        {/* Cart Icon - only shows when user is logged in */}
        {user && (
          <Link href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-cart3 fill-red-700 hover:fill-red-500 transition"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            {/* Cart count badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        )}

        {/* Person Icon - only shows when user is NOT logged in */}
        {!user && (
          <Link href="/signIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="bi bi-person fill-red-700 hover:fill-red-500 transition"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </Link>
        )}

        {/* Sign Out Icon - only shows when user IS logged in */}
        {user && (
          <button onClick={handleSignOut} title="Sign Out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-box-arrow-right fill-red-700 hover:fill-red-500 transition"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
}
