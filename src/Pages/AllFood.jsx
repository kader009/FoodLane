import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllFood = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // const { count } = useLoaderData();
  // console.log(count);

  useEffect(() => {
    axios
      .get('http://localhost:5000/foodData')
      .then((response) => setFoodItems(response.data))
      .catch((error) => console.error('Error fetching food items:', error));
  }, []);

  const filteredItems = foodItems.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const ItemperPage = 5;
  // const numberOfPages = Math.ceil(count / ItemperPage);

  // const pages = [...Array(numberOfPages).keys()]
  // console.log(pages);

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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-16">
            {filteredItems.map((food) => (
              <div
                key={food._id}
                className="max-w-lg rounded overflow-hidden shadow-lg bg-gray-950 mx-8 mb-6"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={food.foodImage}
                  alt={food.foodName}
                />
                <div className="px-4 py-6">
                  <div className="font-bold text-xl mb-2">{food.foodName}</div>
                  <p className="text-base">Category: {food.foodCategory}</p>
                  <p className="font-bold mt-2">
                    Price: ${food.price}
                  </p>
                  <p className="text-sm mt-1">Quantity: {food.quantity}</p>
                </div>
                <div className="px-4 pb-4 flex justify-start">
                  <button
                    onClick={() => (window.location.href = `/food/${food.id}`)}
                    className="bg-[#F44336] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded w-full md:w-auto"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllFood;
