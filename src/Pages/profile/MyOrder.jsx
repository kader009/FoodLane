import { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import LoadingSpinner from '../../Components/LoadingSpinner';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../Components/Container';
import { Helmet } from 'react-helmet-async';

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
  }, [logOut, navigate, user?.email]);

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

  // Calculate total orders and total cost
  const totalOrders = foods.length;
  const totalCost = foods.reduce(
    (sum, food) => sum + parseFloat(food.price || 0),
    0
  );

  return (
    <div>
      <Helmet>
        <title>FoodLane | MyOrder</title>
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Container>
            <h1 className="text-4xl font-extrabold text-[#F44336] text-center mt-8">
              My Orders
            </h1>
            <p className="text-lg mb-8 mt-2 text-center">
              Your list of delicious food orders
            </p>

            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {foods?.length === 0 ? (
                  <p className="text-center text-2xl mt-6">No Orders Found</p>
                ) : (
                  <>
                    <div className="flex justify-between mb-4 px-4 flex-wrap">
                      <p className="text-xl font-bold text-white">
                        Total Orders: {totalOrders}
                      </p>
                      <p className="text-xl font-bold text-white">
                        Total Cost: ${totalCost.toFixed()}
                      </p>
                      <div className="text-center">
                        <button className="bg-[#F44336] text-white px-4 py-1 rounded-lg shadow-lg hover:bg-[#D32F2F] transition-colors duration-300">
                          <Link to={'/payment'}>Payment</Link>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-0 mb-10">
                      {foods?.map((food) => (
                        <div
                          key={food._id}
                          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
                        >
                          <div className="relative w-full h-56 overflow-hidden">
                            <img
                              src={food.foodImage}
                              alt={food.foodName}
                              className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                          </div>

                          <div className="p-6 flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                              {food.foodName}
                            </h2>
                            <p className="text-lg font-semibold text-[#F44336] mb-2">
                              ${food.price}
                            </p>
                            <p className="text-sm text-gray-700 mb-4">
                              <span className="font-bold">Ordered on: </span>
                              {food.Date}
                            </p>
                            <p className="text-sm text-gray-700 mb-6">
                              <span className="font-bold">Owner: </span>
                              {food.buyerName}
                            </p>

                            <button
                              onClick={() => handleDelete(food._id)}
                              className="bg-[#F44336] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#D32F2F] transition-colors duration-300 mb-2"
                            >
                              <div className="flex items-center">
                                <div>Delete</div>
                                <div className="ml-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
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
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
