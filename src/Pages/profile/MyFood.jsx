import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { useState, useEffect } from 'react';
import Container from '../../Components/Container';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner';

const MyFood = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const url = `http://localhost:5000/foodData?email=${user?.email}`;
        const response = await axios.get(url);
        setFoods(response.data.foods || []);
      } catch (error) {
        console.error('Error fetching food data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchFoods();
    } else {
      setLoading(false);
    }
  }, [user?.email]);

  return (
    <div className="bg-black">
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-[#F44336]">My Added Food</h1>
        <p className="capitalize text-lg mt-2">
          Here is the list of food that I want to eat
        </p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          {foods.length === 0 ? (
            <p className="text-center text-white text-2xl mt-6">
              No Data Found
            </p>
          ) : (
            <div className="flex justify-center items-center flex-wrap gap-4 mx-auto">
              {foods.map((food) => (
                <div
                  key={food._id}
                  className="w-96 h-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300 mb-3"
                >
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="w-full h-48 object-cover"
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
                        <Link to={`editItem/${food._id}`}>Update Item</Link>
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
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default MyFood;
