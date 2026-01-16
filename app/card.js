import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-row  bg-[url(/images/Fbackground.jpeg)] bg-cover h-screen mb-50">
      <div className="flex flex-col text-neutral-50 text-7xl font-bold pt-70 pl-20 font-serif">
        <p className="mb-3 ">HOT SPICY </p>
        <p className="mb-20">CHICKEN BURGER</p>
        <p className="text-4xl mb-20">Limited offer / 10 SAR</p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-2xl m-2  hover:bg-green-600 transition  text-2xl">
          Order now
        </button>
      </div>
    </div>
  );
}
