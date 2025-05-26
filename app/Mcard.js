import Image from "next/image";

// export default function Mcard({ image, name, altName, price }) {
//   return (
//     <div className="flex flex-col items-center justify-center rounded-7xl shadow-2xl p-10  hover:bg-gray-400/20 transition  mb-40 gap-y-5 font-mono h-[420px] w-[400px] ">
//       <Image
//         src={image}
//         alt={altName}
//         width={200}
//         height={200}
//         className="h-50"
//       />
//       <h1 className="text-2xl font-">{name}</h1>
//       <p>{price} SAR</p>
//       <button
//         className="rounded-3xl shadow-2xl bg-green-400 p-2 hover:bg-green-500 cursor-pointer transition duration-300  "
//         id="add-to"
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// }

export default function Mcard({ image, name, altName, price, onAddToCart }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl shadow-2xl p-10 hover:bg-gray-100 transition duration-300">
      <Image src={image} alt={altName} width={200} height={200} />
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <p className="text-gray-700">{price} SAR</p>
      <button
        className="rounded-full shadow-md bg-green-500 hover:bg-green-600 text-white px-4 py-1 mt-4 transition"
        onClick={onAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}
