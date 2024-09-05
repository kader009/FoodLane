import { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
  const { user } = useAuth();
  const [foods, SetFood] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {credentials:'include'})
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
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          SetFood(foods.filter(food => food._id !== id));
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
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;  
