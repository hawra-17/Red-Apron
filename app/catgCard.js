import Image from "next/image";

export default function CatgCard({ name, image, altName }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-7xl shadow-2xl p-10  hover:bg-gray-400/20 transition mb-40 gap-y-5 font-mono ">
      <Image src={image} alt={altName} width={200} height={200} />
      <div className="h-1 w-15 bg-red-500 rounded-full mt-2  "></div>
      <h1 className="text-2xl font-">{name}</h1>
    </div>
  );
}
