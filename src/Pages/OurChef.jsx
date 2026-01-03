import Container from '../Components/Container';
import { FaStar } from 'react-icons/fa';
import { motion } from 'motion/react';

const chefs = [
  {
    name: 'John Doe',
    designation: 'Head Chef',
    image: '/images/johndoe.webp',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    designation: 'Sous Chef',
    image: '/images/janesmith.webp',
    rating: 4,
  },
  {
    name: 'Emily Johnson',
    designation: 'Pastry Chef',
    image: '/images/emily.webp',
    rating: 4,
  },
  {
    name: 'Erik Rowan',
    designation: 'Pizza Chef',
    image: '/images/erik.webp',
    rating: 4.5,
  },
];

const OurChefs = () => {
  return (
    <section className="py-12 bg-black px-4 sm:px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-black mb-2 text-[#F44336]">
          Meet Our Chefs
        </h2>
        <p className="mb-6">
          Our chefs at FoodLane expertly craft each dish, ensuring every bite is
          a delight.
        </p>
        <Container>
          <div className="flex flex-wrap justify-center">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
                className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 mb-8"
              >
                <div className="bg-gray-950 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    width="160"
                    height="160"
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {chef.name}
                  </h3>
                  <p className="text-gray-400 mb-3">{chef.designation}</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < chef.rating ? 'text-yellow-500' : 'text-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default OurChefs;
