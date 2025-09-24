import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from '../Components/Container';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FoodSkeleton from '../Components/FoodSkeleton';

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
    <div>
      <Helmet>
        <title>FoodLane | AllFood</title>
      </Helmet>

      <div className="bg-black text-white">
        <header className="py-4 text-center">
          <h1 className="text-4xl font-black text-[#F44336]">
            Food Listing Page
          </h1>
          <p className="capitalize mt-3 text-lg">
            We provide the best food items for our customers
          </p>
        </header>

        <section className="container mx-auto py-4 px-2">
          <div className="mb-6 text-center">
            <input
              type="text"
              placeholder="Search for your food..."
              className="w-full max-w-lg px-4 py-2 text-black rounded-md mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <Container>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <FoodSkeleton key={i} />
            ))}
          </div>
        </Container>
          ) : filteredItems.length === 0 ? (
            <div className="flex justify-center items-center">
              <p className="text-white text-lg">
                No food items found for {searchQuery}
              </p>
            </div>
          ) : (
            <Container>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                {filteredItems.map((food) => (
                  <div
                    key={food._id}
                    className="w-full max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white text-black"
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
                ))}
              </div>
            </Container>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center items-center my-6 flex-wrap gap-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="bg-[#F44336] text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-white">{`Page ${page} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="bg-[#F44336] text-white px-4 py-2 rounded disabled:opacity-50"
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
