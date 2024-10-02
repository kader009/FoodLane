import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CheckOutForm = () => {
  const [error, setError] = useState('');
  const [foods, setFoods] = useState([]);
  const [clientSecret, setClientSecret] = useState('');
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://foodlane-server-api.onrender.com/orders?email=${user?.email}`
      )
      .then((res) => {
        setFoods(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // total cost for order
  const totalCost = foods.reduce(
    (sum, food) => sum + parseFloat(food.price || 0),
    0
  );

  useEffect(() => {
    if (!isNaN(totalCost) && totalCost > 0) {
      axios
        .post(
          'https://foodlane-server-api.onrender.com/create-payment-intent',
          {
            price: totalCost,
          }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error('Error in creating payment intent:', error);
        });
    }
  }, [totalCost]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'unknown',
          },
        },
      });

    if (confirmError) {
      console.log('confirmError:', confirmError);
    } else {
      if (paymentIntent.status === 'succeeded') {
        const payment = {
          email: user?.email,
          name: user?.displayName,
          transactionId: paymentIntent.id,
          date: new Date(),
          foods: foods,
          amount: totalCost,
        };

        await axios.post(
          `https://foodlane-server-api.onrender.com/payment`,
          payment
        );
        toast.success('Payment successful for order..');
        navigate('/payment-history');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-950 p-6 rounded shadow-md w-full max-w-md"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#ccc',
              },
              padding: '10px',
              borderRadius: '4px',
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="text-center mt-6">
        <button
          className="bg-[#F44336] px-6 py-2 mt-3 rounded text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay Now
        </button>
      </div>
      <p className="text-[#F44336] mt-3 text-center">{error}</p>
    </form>
  );
};

export default CheckOutForm;
