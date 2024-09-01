import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddFood = () => {
  const { user } = useAuth();
  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [foodCategory, setFoodCategory] = useState(''); 
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const [foodOrigin, setFoodOrigin] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault()
    const AddFood = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      foodOrigin,
      description,
      addBy: {
        name: user.displayName,
        email: user.email,
      },
    };
    console.log('Food Item:', AddFood);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 md:p-8"> 
      <div className="w-full max-w-2xl bg-gray-950 text-white shadow-md rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Add New Food Item</h1>

        <form onSubmit={handleAddItem}>

        <div>
          <label className="block ">Food Name</label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            className="w-full p-2 mt-1 border bg-black border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter food name"
            required
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="block ">Food Image URL</label>
          <input
            type="text"
            value={foodImage}
            onChange={(e) => setFoodImage(e.target.value)}
            className="w-full p-2 mt-1 border bg-black border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Food Category */}
        <div>
          <label className="block ">Food Category</label>
          <input
            type="text"
            value={foodCategory}
            onChange={(e) => setFoodCategory(e.target.value)}
            className="w-full p-2 mt-1 border bg-black border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter food category"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block ">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 mt-1 border bg-black border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            min="1"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block ">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 mt-1 border bg-black border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Food Origin */}
        <div>
          <label className="block ">Food Origin (Country)</label>
          <input
            type="text"
            value={foodOrigin}
            onChange={(e) => setFoodOrigin(e.target.value)}
            className="w-full p-2 mt-1 border bg-black border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter food origin"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block ">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 bg-black rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter a short description of the food item"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Add Item Button */}
        <button
        type='submit'
          // onClick={handleAddItem}
          className="w-full bg-[#F44336] text-white py-2 rounded-md transition duration-200"
        >
          Add Item
        </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
