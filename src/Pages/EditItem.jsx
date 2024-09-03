import { useLoaderData } from 'react-router-dom';

const EditItem = () => {
  const { foodName, _id, price, description, foodImage, quantity, foodOrigin } =
    useLoaderData();
  // console.log(_id);
  return (
    <div className="container mx-auto bg-black pb-4">
      <h1 className="text-3xl font-bold text-center my-8 text-[#F44336]">
        Edit Food Item
      </h1>
      <form className="max-w-lg mx-auto bg-gray-950 p-5 rounded">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            defaultValue={foodName}
            className="w-full px-3 py-2 border rounded-md bg-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            className="w-full px-3 py-2 border rounded-md bg-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            className="w-full px-3 py-2 border rounded-md bg-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Food Image URL
          </label>
          <input
            type="text"
            name="foodImage"
            defaultValue={foodImage}
            className="w-full px-3 py-2 border rounded-md bg-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Food Origin
          </label>
          <input
            type="text"
            name="foodImage"
            defaultValue={foodOrigin}
            className="w-full px-3 py-2 border rounded-md bg-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Food Quantity
          </label>
          <input
            type="text"
            name="foodImage"
            defaultValue={quantity}
            className="w-full px-3 py-2 border rounded-md bg-black"
          />
        </div>
        <button
          type="submit"
          className="bg-[#F44336] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default EditItem;
