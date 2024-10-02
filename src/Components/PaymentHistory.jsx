import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const PaymentHistory = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/payment/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setPayments(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.email]);
  return (
    <div className="max-w-full mx-auto p-4 min-h-screen">
      <h2 className="text-2xl font-black mb-6 text-center text-[#F44336]">Payment History</h2>
      
      {payments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Foods</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment._id}>
                  <td className="px-4 py-2">{payment.name}</td>
                  <td className=" py-2">{payment.email}</td>
                  <td className="px- py-2">{payment.transactionId}</td>
                  <td className=" py-2">{new Date(payment.date).toLocaleString()}</td>
                  <td className="px-6 py-2">${payment.amount.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <ul className="list-decimal list-inside">
                      {payment.foods.map((food, index) => (
                        <li key={index}>{food.foodName}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No payment history available.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
