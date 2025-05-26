import Image from "next/image";
import Card from "./card";
import SCH from "./SCH";
import Text from "./text"; // still not use
import Pizza from "./Pizza";
import Burger from "./Burger";

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black ">
      {/* <FCard /> */}
      <Card />
      <p className="text-red-600 text-start ml-27 mb-3 text-2xl font-bold font-serif">
        CRISPY,EVERY BITE TASTE
      </p>
      <p className="text-black text-start ml-27 mb-10 text-4xl font-bold font-serif">
        POPULAR FOOD ITEMS
      </p>
      <SCH />
      <Pizza />
      <Burger />
    </div>
  );
}
