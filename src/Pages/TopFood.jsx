import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopFood = () => {
  const [foods, SetFoods] = useState([]);
  axios.get('http://localhost:5000/foodData').then((res) => SetFoods(res.data));

  return (
    <div className="bg-black text-center">
      <h1 className="text-4xl font-bold text-[#F44336] mb-3">Top Food</h1>
      <p className="text-lg mb-7 text-center truncate">
        Explore our top-rated dishes, crafted with care and bursting with
        flavor. Savor <br /> a culinary journey that delights every bite.
      </p>

      <div className=" flex items-center justify-center flex-wrap ">
        {foods.slice(0, 6).map((food) => (
          <div className="max-w-lg rounded overflow-hidden shadow-lg bg-gray-950 mx-8 mb-6" key={food._id}>
            <img
              className="w-full h-48 object-cover"
              src={food.foodImage}
              alt={food.foodName}
              loading="lazy"
            />
            <div className="px-6 py-6">
              <div className="font-bold text-xl mb-2 ">{food.foodName}</div>
              <p className=" text-base">Category: {food.foodCategory}</p>
              <p className=" font-bold mt-2">Price: ${food.price.toFixed(2)}</p>
            </div>
            <div className="px-4 pb-4 flex justify-center">
              <button className="bg-[#F44336] text-white font-bold py-2 px-6 rounded w-full md:w-auto">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-6">
        <Link to={'/all-foods'}>
          <button className="bg-[#F44336] px-6 py-2 rounded">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
