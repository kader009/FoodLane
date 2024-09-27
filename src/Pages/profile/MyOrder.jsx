import { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import LoadingSpinner from '../../Components/LoadingSpinner';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          `https://foodlane-server-api.onrender.com/orders?email=${user?.email}`,
          {
            credentials: 'include',
          }
        );

        if (!res.ok) throw new Error('Unauthorized');

        const data = await res.json();
        setFoods(data);
      } catch (error) {
        console.log(error);
        logOut().then(() => {
          navigate('/login');
        });
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://foodlane-server-api.onrender.com/orders/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          toast.success('Food deleted successfully');
        }

        if (data.deletedCount > 0) {
          setFoods(foods.filter((food) => food._id !== id));
        }
      })
      .catch((error) => {
        toast.error('Something went wrong while deleting.');
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-screen-lg mx-auto py-8">
          <h1 className="text-3xl font-black text-[#F44336] text-center">
            My Orders
          </h1>
          <p className="capitalize text-lg mb-4 mt-2 text-center">
            My order list of food items
          </p>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              {foods?.length === 0 ? (
                <p className="text-center text-2xl mt-6">No Data Found</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 lg:px-0">
                  {foods?.map((food) => (
                    <div
                      key={food._id}
                      className="bg-white text-black rounded-lg p-4 shadow-lg flex flex-col items-center"
                    >
                      <img
                        src={food.foodImage}
                        alt={food.foodName}
                        className="w-32 h-32 object-cover rounded-full mb-4"
                      />
                      <h2 className="text-xl font-semibold mb-2">
                        {food.foodName}
                      </h2>
                      <p className="mb-2 text-[#F44336] font-bold">
                        ${food.price}
                      </p>
                      <p className="text-sm mb-2">{food.Date}</p>
                      <p className="text-sm mb-4">
                        <span className="font-bold">Owner: </span>
                        {food.buyerName}
                      </p>
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
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
