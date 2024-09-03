import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/foodData/${id}`
        );
        setFood(response.data);
      } catch (error) {
        console.error('There was an error fetching the food data!', error);
      }
    };

    fetchFood();
  }, [id]);

  return (
    <div>
      <h2 className="capitalize text-center text-2xl font-bold text-[#F44336] my-6">
        Single food item
      </h2>

      <div className="w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300 mb-8 my-4">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {food.foodName}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{food.description}</p>
          <p className="text-gray-600 text-sm mb-4">
            Origin: {food.foodOrigin}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Category: {food.foodCategory}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">
              Price: ${food.price}
            </span>

            <button className="flex items-center bg-[#F44336] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
              <Link to={`/single-food/${food._id}`}>Purchase</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
