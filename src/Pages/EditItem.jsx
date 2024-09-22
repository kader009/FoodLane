import { useLoaderData } from 'react-router-dom';

const EditItem = () => {
  const { foodName, _id, price, description, foodImage, quantity, foodOrigin } =
    useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const foodName = form.foodName.value;
    const description = form.description.value;
    const foodImage = form.foodImage.value;
    const quantity = form.quantity.value;
    const foodOrigin = form.foodOrigin.value;
    const price = form.price.value;

    const foodValue = {
      foodName,
      price,
      description,
      foodImage,
      quantity,
      foodOrigin,
    };

    fetch(`http://localhost:5000/foodData/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors
      });
  };

  return (
    <div className="container mx-auto bg-black pb-4">
      <h1 className="text-3xl font-black text-center my-8 text-[#F44336]">
        Edit Food Item
      </h1>
      <form
        onSubmit={handleUpdate}
        className="max-w-lg mx-auto bg-gray-950 p-5 rounded"
      >
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
            name="foodOrigin"
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
            name="quantity"
            defaultValue={quantity}
            className="w-full px-3 py-2 border rounded-md bg-black"
          />
        </div>
        <button
          type="submit"
          className="bg-[#F44336] text-white px-4 py-2 rounded hover:bg-[#D32F2F] transition-colors"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default EditItem;
