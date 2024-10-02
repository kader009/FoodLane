import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

  return (
    <div className='min-h-screen '>
      <Elements stripe={stripePromise}>
        <CheckOutForm/>
      </Elements>
    </div>
  );
};

export default Payment;