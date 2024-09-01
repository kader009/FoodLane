import axios from 'axios';
import { useEffect, useState } from 'react';

const FoodCard = ({ food }) => {
  return (
    <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg bg-gray-950 mx-4 my-4">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-bold mb-2">{food.foodName}</h3>
          <p className="text-sm">{food.description}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [foods, seTfoods] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/foodData').then((res) => seTfoods(res.data));
  }, []);

  return (
    <div className=" bg-black text-white py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#F44336]">
        Food Gallery
      </h1>
      <div className="flex flex-wrap justify-center">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;