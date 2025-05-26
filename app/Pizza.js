// import Image from "next/image";
// import Mcard from "./Mcard";
// export default function Pizza() {
//   return (
//     <div className="flex flex-col -gap-y-10">
//       <p className="text-red-600 text-start font-bold text-4xl flex flex-col pl-20 ">
//         PIZZA
//       </p>
//       <div className="flex flex-row gap-x-4 pl-20 pt-7 ">
//         <Mcard
//           name={"Margherita Pizza"}
//           image={"/images/Margherita.jpeg"}
//           altName={"Margherita Pizza"}
//           price={30}
//         />
//         <Mcard
//           name={"Veggie Pizza"}
//           image={"/images/Veggie.jpeg"}
//           altName={"Veggie Pizza"}
//           price={40}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Mcard from "./Mcard";
import Details from "./details/Pdetails";

export default function Pizza() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowDetails = (item) => {
    setSelectedItem(item);
    setShowDetails(true);
  };

  return (
    <div className="flex flex-col gap-y-10 mb-10">
      <p className="text-red-600 text-start font-bold text-4xl pl-20">PIZZA</p>
      <div className="flex flex-row gap-x-4 pl-20 pt-7">
        <Mcard
          name="Margherita Pizza"
          image="/images/Margherita.jpeg"
          altName="Margherita Pizza"
          price={30}
          onAddToCart={() =>
            // here chat add the funcation that we add it as an arguments in Mcard
            handleShowDetails({
              name: "Margherita Pizza",
              image: "/images/Margherita.jpeg",
              price: 30,
            })
          }
        />
        <Mcard
          name="Veggie Pizza"
          image="/images/Veggie.jpeg"
          altName="Veggie Pizza"
          price={40}
          onAddToCart={() =>
            handleShowDetails({
              name: "Veggie Pizza",
              image: "/images/Veggie.jpeg",
              price: 40,
            })
          }
        />
      </div>

      {showDetails && (
        <Details
          name={selectedItem.name}
          image={selectedItem.image}
          price={selectedItem.price}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}
