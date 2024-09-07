import { useLoaderData } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const PurchasePage = () => {
  const { user } = useAuth();
  const { foodName, price, quantity, foodImage } = useLoaderData();

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

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

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchaseValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Food order successfully!');
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
    <div className=" mx-auto bg-black pb-4">
      <h1 className="text-3xl font-bold text-center my-8 text-[#F44336]">
        Purchase Food Item
      </h1>
      <form
        onSubmit={handlePurchase}
        className="max-w-lg mx-auto bg-gray-950 p-5 rounded"
      >
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
          Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchasePage;
