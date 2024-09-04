import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
  const { user } = useAuth();
  const [foods, SetFood] = useState([])

  fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      SetFood(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className=" mx-4 py-8">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Added Time</th>
              <th className="px-4 py-2 border">Food Owner</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map(food => (
              <tr key={food._id}>
                <td className="px-4 py-2 border">
                  <img src={food.foodImage} alt={food.foodName} className="w-20 h-20 object-cover rounded-full" />
                </td>
                <td className="px-4 py-2 border">{food.foodName}</td>
                <td className="px-4 py-2 border">{food.price}</td>
                <td className="px-4 py-2 border">{food.Date}</td>
                <td className="px-4 py-2 border">{food.buyerName}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
