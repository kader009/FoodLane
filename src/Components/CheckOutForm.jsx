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
        console.log(res.data);
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
  console.log(totalCost);

  useEffect(() => {
    if (!isNaN(totalCost) && totalCost > 0) {
      axios
        .post('https://foodlane-server-api.onrender.com/create-payment-intent', {
          price: totalCost,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error('Error in creating payment intent:', error);
        });
    } else {
      console.error('Invalid total cost:', totalCost);
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
      console.log('[error]:', error);
      setError(error.message);
    } else {
      console.log('[paymentMethod]:', paymentMethod);
      setError('');
    }

    // confirm payment
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
      console.log('paymentIntent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id:', paymentIntent.id);

        const payment = {
          email: user?.email,
          name: user?.displayName,
          transactionId: paymentIntent.id,
          date: new Date(),
          foods: foods,
          amount: totalCost,
        };

        const response = await axios.post(
          `https://foodlane-server-api.onrender.com/payment`,
          payment
        );
        console.log(response.data);
        toast.success('Payment successfull for order..')
        navigate('/payment-history')
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#fff',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="text-center mt-6">
        <button
          className="bg-[#F44336] px-6 py-1 mt-3 rounded "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay Now
        </button>
      </div>
      <p className="text-[#F44336] mt-3">{error}</p>
    </form>
  );
};

export default CheckOutForm;
