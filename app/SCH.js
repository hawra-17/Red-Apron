import Image from "next/image";
import CatgCard from "./catgCard";

export default function SCH() {
  return (
    <div className="flex flex-row justify-center gap-x-10 ">
      <CatgCard
        name={"PIZZA "}
        image={"/images/pizzaslice.png"}
        altName={"Pizza slice"}
      />
      <CatgCard
        name={"Burger"}
        image={"/images/burger.png"}
        altName={"burger"}
      />
      <CatgCard
        name={"French Fry"}
        image={"/images/fry.png"}
        altName={"fry "}
      />
      <CatgCard
        name={"Crispy Chicjen"}
        image={"/images/crispy-chicken.png"}
        altName={"hhhh"}
      />
    </div>
  );
}
