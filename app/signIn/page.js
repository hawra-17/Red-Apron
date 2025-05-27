"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  function login() {
    if (Email === "" || Password === "") {
      alert("pleae fill all the fields");
    } else <Link herf="/"></Link>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" flex flex-row bg-white p-10 rounded-2xl shadow-2xl  text-black ">
        <div className="flex flex-col items-center justify-center">
          <Image src={"/images/logo.png"} alt="logo" height={300} width={300} />
        </div>
        <div className="flex flex-col ml-5 pl-20 gap-y-3 ">
          <div className="flex flex-row gap-x-2  pb-10 ">
            <h1 className="text-gray-400 font-light gap-x-10">
              Dont hvae an account ?
            </h1>
            <button className="font-bold hover:text-blue-600 ">Sign up </button>
          </div>

          <h1 className="text-4xl font-bold">sign in </h1>
          <p> Sign in with Open account </p>
          <div className="flex flex-row gap-x-2">
            <button className="bg-white flex flex-row justify-center items-center pl-3 pr-3 rounded-xl border-2 border-gray-400 hover:bg-gray-300">
              <Image
                src={"/images/GoogleLogo.png"}
                alt="google"
                height={30}
                width={30}
              />
              Google
            </button>
            <button className="bg-white flex flex-row justify-center items-center pl-3 pr-3 rounded-xl border-2 border-gray-400 hover:bg-gray-300 gap-x-2 ">
              <Image
                src={"/images/AppleLogo.png"}
                alt="Apple"
                height={20}
                width={20}
              />
              Apple ID
            </button>
          </div>
          <div className="h-0.5 w-60 bg-gray-200 rounded-full mt-2  "></div>
          <p className="font-bold">Or continue with email address </p>
          <label className="text-black " htmlFor="email">
            Email
          </label>
          <input
            type="Email"
            name="Email"
            id="Email"
            className="rounded-2xl border-2 pl-2 pr-2 border-gray-400"
            placeholder="User@example.com"
          />
          <label className="text-black " htmlFor="Password">
            Password
          </label>
          <input
            type="Password"
            name="Password"
            id="Password"
            className="rounded-2xl border-2 pl-2 pr-2 border-gray-400"
            placeholder="........."
          />
          <button
            className="bg-blue-600 text-white rounded-2xl pl-3 pr-3 hover:bg-blue-700 "
            onClick={login}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
