import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';

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

      <Container>
        <div className=" flex items-center justify-center flex-wrap gap-4 ">
          {foods.slice(0, 6).map((food) => (
            <div
              key={food._id}
              className="w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300 mb-3"
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-48 object-cover"
                loading='lazy'
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
                    <Link to={`/single-food/${food._id}`}>Detail</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="text-center py-6">
        <Link to={'/all-foods'}>
          <button className="bg-[#F44336] px-6 py-2 rounded">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
