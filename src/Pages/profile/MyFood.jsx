import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { useState, useEffect } from 'react';
import Container from '../../Components/Container';
import { Link } from 'react-router-dom';

const MyFood = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const url = `http://localhost:5000/foodData?email=${user?.email}`;
        const response = await axios.get(url);
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoods();
  }, [user?.email]);

  return (
    <div className="bg-black">
      <div className='text-center my-6'>

      <h1 className='text-3xl font-bold text-[#F44336]'>My Added Food</h1>
      <p className='capitalize text-lg'>Here is the list of food that i want to eat</p>
      </div>
      <Container>
        <div className="flex justify-center items-center flex-wrap gap-4  mx-auto">
          {foods.map((food) => (
            <div
              key={food._id}
              className="w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300 mb-3"
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
                <p className="text-gray-600 text-sm mb-4">{food.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">
                    ${food.price}
                  </span>
                  <button className="flex items-center bg-[#F44336] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                    <Link to={`editItem/${food._id}`}>Update Item</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyFood;
