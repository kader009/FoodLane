import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import FoodSkeleton from '../Components/FoodSkeleton';

const TopFood = () => {
  const [foods, SetFoods] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://foodlane-server-api.onrender.com/foodData')
      .then((res) => {
        SetFoods(res.data.foods || []);
        SetLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching food items:', error);
        SetLoading(false);
      });
  }, []);

  return (
    <div className="bg-black text-center">
      <h1 className="text-4xl font-black text-[#F44336] mb-3">Top Food</h1>
      <p className="text-lg mb-7 text-center text-wrap">
        Explore our top-rated dishes, crafted with care and bursting with
        flavor. Savor <br /> a culinary journey that delights every bite.
      </p>

      {loading ? (
        <Container>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <FoodSkeleton key={i} />
            ))}
          </div>
        </Container>
      ) : (
        <Container>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {foods.slice(0, 6).map((food) => (
              <div
                key={food._id}
                className="w-96 mx-auto bg-white rounded shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300 mb-3"
              >
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
                  <p className="text-gray-600 text-sm mb-4">
                    {food.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">
                      ${food.price}
                    </span>
                    <button className="flex items-center bg-[#F44336] text-white px-4 py-2 rounded hover:bg-[#D32F2F] transition-colors">
                      <Link to={`/single-food/${food._id}`}>Detail</Link>
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
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}

      <div className="text-center py-6">
        <Link to={'/all-foods'}>
          <button className="bg-[#F44336] px-6 py-2 rounded">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
