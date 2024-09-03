import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from '../Components/Container';
import { Link } from 'react-router-dom';

const AllFood = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/foodData')
      .then((response) => setFoodItems(response.data))
      .catch((error) => console.error('Error fetching food items:', error));
  }, []);

  const filteredItems = foodItems.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black">
      <div className=" bg-black text-white">
        <header className=" py-6 text-center">
          <h1 className="text-4xl font-bold text-[#F44336]">
            Food Listing Page
          </h1>
        </header>

        <section className="container mx-auto py-4">
          <div className="mb-6 text-center">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full max-w-lg px-4 py-2 text-black rounded-md mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Container>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center">
              {filteredItems.map((food) => (
                <div
                  key={food._id}
                  className="w-[22rem] rounded overflow-hidden shadow-lg bg-white text-black mx-8 mb-6"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={food.foodImage}
                    alt={food.foodName}
                  />
                  <div className="px-4 py-6">
                    <div className="font-bold text-xl mb-2">
                      {food.foodName}
                    </div>
                    <p className="text-base">Category: {food.foodCategory}</p>
                    <p className="font-bold mt-2 text-[#F44336]">
                      Price: ${food.price}
                    </p>
                    <p className="text-sm mt-1">Quantity: {food.quantity}</p>
                  </div>
                  <div className="px-4 pb-4 flex justify-start">
                    <button className="bg-[#F44336] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded w-full md:w-auto">
                      <Link to={`/single-food/${food._id}`}>Detail</Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default AllFood;
