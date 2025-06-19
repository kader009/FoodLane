import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

const SingleFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(
          `https://foodlane-server-api.onrender.com/foodData/${id}`
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
      <Helmet>
        <title>FoodLane | SingleFood</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="capitalize text-center text-4xl font-extrabold text-[#F44336] mt-6">
          {food.foodName}
        </h1>
        <p className="text-center text-xl mb-6 mt-3">
          A delicious treat awaits. Order now!
        </p>

        <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:scale-95 transform transition duration-300 mb-10">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="w-full h-56 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {food.foodName}
            </h2>
            <p className="text-gray-600 text-md mb-3">{food.description}</p>

            {/* Additional Information */}
            <p className="text-gray-600 text-md mb-2">
              Origin: <span className="text-gray-800">{food.foodOrigin}</span>
            </p>
            <p className="text-gray-600 text-md mb-2">
              Category:{' '}
              <span className="text-gray-800">{food.foodCategory}</span>
            </p>
            <p className="text-gray-600 text-md mb-2">
              Preparation Time: <span className="text-gray-800">15-20 min</span>
            </p>
            <p className="text-gray-600 text-md mb-6">
              Spicy Level: <span className="text-yellow-500">Medium 🌶️</span>
            </p>

            {/* Price and Purchase Button */}
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">
                Price: ${food.price}
              </span>
              <button className="flex items-center bg-[#F44336] text-white px-5 py-2 rounded-lg hover:bg-[#D32F2F] transition">
                <Link to={`/purchase/${food._id}`}>
                  <div className="flex items-center">
                    <span>Purchase</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="ml-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </div>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
