import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from '../Components/Container';
import { Link } from 'react-router-dom';

const AllFood = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://foodlane-server-api.onrender.com/foodData?page=${page}&limit=6`
      )
      .then((response) => {
        setFoodItems(response.data.foods);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching food items:', error);
        setLoading(false);
      });
  }, [page]);

  const filteredItems = foodItems.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="bg-black">
      <div className=" bg-black text-white">
        <header className=" py-4 text-center">
          <h1 className="text-4xl font-black text-[#F44336]">
            Food Listing Page
          </h1>
          <p className="capitalize mt-3 text-lg">
            We provide the best food items for our customers
          </p>
        </header>

        <section className="container mx-auto py-2">
          <div className="mb-6 text-center">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full max-w-lg px-4 py-2 text-black rounded-md mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-[#F44336]"></div>
            </div>
          ) : (
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
                      <button className="bg-[#F44336] hover:bg-[#D32F2F] text-white font-bold py-2 px-6 rounded w-full md:w-auto ">
                        <Link to={`/single-food/${food._id}`}>Detail</Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center items-center my-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="bg-[#F44336] text-white px-4 py-2 rounded mx-2 disabled:opacity-50"
            >
              Previous
            </button>
            <span>{`Page ${page} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="bg-[#F44336] text-white px-4 py-2 rounded mx-2 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllFood;
