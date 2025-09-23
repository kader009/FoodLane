import { Link } from 'react-router-dom';
import Container from '../Components/Container';

const pricingPlans = [
  {
    name: 'Silver',
    price: '$9.99',
    features: [
      '1 Main Dish',
      '1 Soft Drink',
      'Free Delivery',
      'Second time 2% dicount',
    ],
    highlight: false,
  },
  {
    name: 'Gold',
    price: '$19.99',
    features: ['2 Main Dishes', '1 Dessert', '2 Soft Drinks', 'Free Delivery'],
    highlight: true, // most popular
  },
  {
    name: 'Premium',
    price: '$29.99',
    features: [
      '3 Main Dishes',
      '2 Desserts',
      '3 Soft Drinks',
      'Priority Delivery',
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <Container>
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10 text-[#F44336]">
            Combo Meal Deals
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-950 text-white rounded-lg shadow-md p-6 border-2 transition-transform transform hover:scale-105 ${
                  plan.highlight ? 'border-[#F44336]' : 'border-transparent'
                }`}
              >
                {/* 🔥 MOST POPULAR BADGE */}
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-[#F44336] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-center text-white mb-4">
                  {plan.price}
                </p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-white text-sm text-center">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <button className="bg-[#F44336] hover:bg-[#F44336] text-white font-semibold px-6 py-2 rounded transition duration-300">
                    <Link to="/all-foods">Choose Plan</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
