import axios from 'axios';
import { useState } from 'react';

const TopFood = () => {
  const [foods, SetFoods] = useState([]);
  axios.get('data.json').then((res) => SetFoods(res.data));
  return (
    <div className="bg-black flex items-center justify-center flex-wrap ">
      {foods.slice(0, 6).map((food) => (
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-gray-950 mx-8 mb-6">
          <img
            className="w-full h-48 object-cover"
            src={food.foodImage}
            alt={food.foodName}
          />
          <div className="px-4 py-6">
            <div className="font-bold text-xl mb-2">
              {food.foodName}
            </div>
            <p className=" text-base">
              Category: {food.foodCategory}
            </p>
            <p className=" font-bold mt-2">
              Price: ${food.price.toFixed(2)}
            </p>
          </div>
          <div className="px-4 pb-4 flex justify-start">
            <button className="bg-[#F44336] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded w-full md:w-auto">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopFood;
