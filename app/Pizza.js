import Image from "next/image";
import Mcard from "./Mcard";
export default function Pizza() {
  return (
    <div className="flex flex-col -gap-y-10">
      <p className="text-red-600 text-start font-bold text-4xl flex flex-col pl-20 ">
        PIZZA
      </p>
      <div className="flex flex-row gap-x-4 pl-20 pt-7 ">
        <Mcard
          name={"Margherita Pizza"}
          image={"/images/Margherita.jpeg"}
          altName={"Margherita Pizza"}
          price={30}
        />
        <Mcard
          name={"Veggie Pizza"}
          image={"/images/Veggie.jpeg"}
          altName={"Veggie Pizza"}
          price={40}
        />
      </div>
    </div>
  );
}
