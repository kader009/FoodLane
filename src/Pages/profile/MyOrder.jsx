import { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
  const { user } = useAuth();
  const [foods, SetFood] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        SetFood(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          SetFood(foods.filter((food) => food._id !== id));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-4 my-12">
      <h1 className="text-2xl font-bold mb-4 text-white">My Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white text-black rounded-lg p-4 shadow-lg flex flex-col flex-wrap items-center"
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{food.foodName}</h2>
            <p className="mb-2">$ {food.price}</p>
            <p className="text-sm mb-2">{food.Date}</p>
            <p className="text-sm mb-4">Owner: {food.buyerName}</p>
            <button
              onClick={() => handleDelete(food._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              <div className="flex">
                <div>Delete</div>
                <div className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
