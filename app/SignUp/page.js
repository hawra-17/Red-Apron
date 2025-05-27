"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../Config/supabaseClient";

export default function SignUp() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const router = useRouter();

  async function SignUp() {
    if (Name === "" || Email === "" || Password === "") {
      alert("Please fill all the fields");
      return;
    }

    if (!Email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    if (Password !== CPassword) {
      alert("Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
      options: {
        data: {
          full_name: Name,
        },
      },
    });

    if (error) {
      alert("Sign up failed: " + error.message);
    } else {
      alert(
        "Account created! Please check your email to confirm (if required)."
      );
      router.push("/signIn");
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" relative flex flex-row bg-white p-10 rounded-2xl shadow-2xl  text-black ">
        <div className="flex flex-col items-center justify-center">
          <Image src={"/images/logo.png"} alt="logo" height={300} width={300} />
        </div>
        <div className="flex flex-col ml-5 pl-20 gap-y-3 ">
          {/* Top-right person icon inside the card */}
          <div className="absolute top-4 right-4">
            <Link href="/signIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                className="bi bi-person hover:fill-blue-600"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </Link>
          </div>

          <h1 className="text-4xl font-bold">Sign Up </h1>
          <div className="h-0.5 w-60 bg-gray-200 rounded-full mt-2  "></div>

          <label className="text-black " htmlFor="email">
            Name
          </label>
          <input
            type="Name"
            name="Name"
            className="rounded-2xl border-2 pl-2 pr-2 border-gray-400"
            placeholder="Hawra"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-black " htmlFor="email">
            Email
          </label>
          <input
            type="Email"
            name="Email"
            className="rounded-2xl border-2 pl-2 pr-2 border-gray-400"
            placeholder="User@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-black " htmlFor="Password">
            Password
          </label>
          <input
            type="Password"
            name="Password"
            className="rounded-2xl border-2 pl-2 pr-2 border-gray-400"
            placeholder="........."
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="text-black " htmlFor="Password">
            Confirm Password
          </label>
          <input
            type="Password"
            name="Password"
            className="rounded-2xl border-2 pl-2 pr-2 border-gray-400"
            placeholder="........."
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white rounded-2xl pl-3 pr-3 hover:bg-blue-700 "
            onClick={SignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
