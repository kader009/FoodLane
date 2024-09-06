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

            <button className="flex items-center bg-[#F44336] text-white px-4 py-2 rounded hover:bg-[#D32F2F] transition-colors">
              <Link to={`/purchase/${food._id}`}>
                <div className="flex justify-center items-center">
                  <div>Purchase</div>
                  <div>
                    <div className="ms-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
