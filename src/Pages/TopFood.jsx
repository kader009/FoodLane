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
                loading="lazy"
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

      <div className="text-center py-6">
        <Link to={'/all-foods'}>
          <button className="bg-[#F44336] px-6 py-2 rounded">
            <div className="flex justify-center items-center">
              <div>See All</div>
              <div>
                <div className="ms-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.714 2.064-2.34 3.796-4.528 4.597A11.983 11.983 0 0112 19c-4.478 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
