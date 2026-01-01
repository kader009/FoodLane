import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { headers, slideUp } from '../Components/animation/variants';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundPosition: 'center top',
      }}
    >
      <div className="hero-overlay bg-opacity-80 bg-black"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headers}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-5 text-4xl font-bold"
          >
            Welcome to FoodLane
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-5 text-lg"
          >
            Explore a wide variety of delicious foods and satisfy your cravings
            with our amazing collection of recipes. Discover, taste, and enjoy!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#FF6B6B] p-2 rounded"
          >
            <Link to={'all-foods'}>View All Food</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
