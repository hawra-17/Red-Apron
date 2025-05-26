import Image from "next/image";

export default function Bdetails({ name, image, price, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 p-10">
        <img src={image} alt={name} className="w-full rounded-mb mb-4" />
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <div className="flex flex-col">
          <p className=" font-bold"> Adding extra items ?</p>
          {/* for extra cheese  */}
          <div className="flex flex-row gap-x-2 items-center">
            <input name="add" type="checkbox" />
            <label htmlFor="add" className="gap-x-2">
              Cheese
            </label>
          </div>
          {/* for extra Tomato   */}

          <div className="flex flex-row gap-x-2 items-center">
            <input name="add" type="checkbox" />
            <label htmlFor="add" className="gap-x-2">
              Tomato
            </label>
          </div>
          {/* extra Suace */}
          <div className="flex flex-row gap-x-2 items-center">
            <input name="add" type="checkbox" />
            <label htmlFor="add" className="gap-x-2">
              Suace
            </label>
          </div>
          {/* extra meat  */}
          <div className="flex flex-row gap-x-2 items-center">
            <input name="add" type="checkbox" />
            <label htmlFor="add" className="gap-x-2">
              Meat
            </label>
          </div>
        </div>
        <p className="font-bold">remove some items ? </p>
        {/* remove cheese  */}
        <div className="flex flex-row gap-x-2 items-center">
          <input name="add" type="checkbox" />
          <label htmlFor="add" className="gap-x-2">
            Cheese
          </label>
        </div>
        {/* remove Tomato   */}

        <div className="flex flex-row gap-x-2 items-center">
          <input name="add" type="checkbox" />
          <label htmlFor="add" className="gap-x-2">
            Tomato
          </label>
        </div>
        {/* without Suace */}
        <div className="flex flex-row gap-x-2 items-center">
          <input name="add" type="checkbox" />
          <label htmlFor="add" className="gap-x-2">
            without Suace
          </label>
        </div>

        <p className="text-lg mb-4 font-bold pt-3">price: {price} SAR</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition gap-x-10 mr-3"
        >
          Add to cart
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
