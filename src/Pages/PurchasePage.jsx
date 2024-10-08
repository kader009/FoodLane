import { useLoaderData } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PurchasePage = () => {
  const { user } = useAuth();
  const { foodName, price, quantity, foodImage } = useLoaderData();
  const [userOrders, setUserOrders] = useState([]);

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  // Fetch the user's existing orders
  useEffect(() => {
    fetch(
      `https://foodlane-server-api.onrender.com/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data); // Save the user's existing orders in state
      })
      .catch((error) => {
        console.log('Error fetching user orders: ', error);
      });
  }, [user?.email]);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const Date = form.Date.value;
    const foodImage = form.foodImage.value;

    const purchaseValue = {
      foodName,
      price,
      buyerName,
      buyerEmail,
      Date,
      foodImage,
    };

    // Check if the same food item is already in the user's order list
    const isAlreadyOrdered = userOrders.some(
      (order) => order.foodName === foodName
    );

    if (isAlreadyOrdered) {
      toast.error('You have already ordered this food item.');
      return;
    }

    // Proceed with placing the order if not a duplicate
    fetch('https://foodlane-server-api.onrender.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchaseValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Food ordered successfully!');
        } else {
          toast.error('Failed to add purchase.');
        }
      })
      .catch((error) => {
        toast.error('An error occurred while adding the purchase.');
        console.log(error);
      });

    console.log(purchaseValue);
  };

  return (
    <div>
      <Helmet>
        <title>FoodLane | Purchase</title>
      </Helmet>

      <div className=" mx-auto bg-black pb-4">
        <h1 className="text-3xl font-bold text-center my-8 text-[#F44336]">
          Purchase Food Item
        </h1>
        <form
          onSubmit={handlePurchase}
          className="max-w-lg mx-auto bg-gray-950 p-5 rounded"
        >
          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              defaultValue={foodName}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Food Image
            </label>
            <input
              type="text"
              name="foodImage"
              defaultValue={foodImage}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Buyer Name
            </label>
            <input
              type="text"
              name="buyerName"
              defaultValue={user?.displayName}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Buyer Email
            </label>
            <input
              type="text"
              name="buyerEmail"
              defaultValue={user?.email}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Buying Date
            </label>
            <input
              type="text"
              name="Date"
              defaultValue={formattedDate}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <button
            type="submit"
            className="bg-[#F44336] text-white px-4 py-2 rounded hover:bg-[#D32F2F] transition-colors"
          >
            <div className="flex">
              <div>Order Now</div>
              <div>
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
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchasePage;
