"use client";
import Mcard from "./Mcard";
import Image from "next/image";
import { useState } from "react";
import Bdetails from "./details/Bdetails";

export default function Burger() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItems] = useState(null);

  const handleShowDetails = (item) => {
    setSelectedItems(item);
    setShowDetails(true);
  };

  return (
    <div className="flex flex-col gap-y-10 mb-10 ">
      <p className="text-4xl font-bold text-start text-red-600 pl-20">Burger</p>
      <div className="flex flex-row gap-x-4 pl-20 pt-7">
        <Mcard
          image="/images/burger.png"
          name="cheese nurger"
          altName="cheese nurget "
          price={20}
          onAddToCart={() =>
            handleShowDetails({
              name: "Cheese Burger",
              image: "/images/burger.png",
              price: 20,
            })
          }
        />
      </div>
      {showDetails && (
        <Bdetails
          name={selectedItem.name}
          image={selectedItem.image}
          price={selectedItem.price}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}
