import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  return (
    <>
      <Helmet>
        <title>Foodlane | Payment</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center p-4">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
