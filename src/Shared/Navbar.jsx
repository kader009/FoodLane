import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { AnimatePresence, motion } from 'motion/react';
import { itemVariants, NavbarVariants } from '../Components/animation/variants';
import { useState } from 'react';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handlelogOut = () => {
    logOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <div className="navbar bg-[rgba(8,8,8,7)] sticky top-0 z-10">
      <div className="flex-1">
        <Link
          to="/"
          className="normal-case text-xl font-semibold dark:text-white"
        >
          FoodLane
        </Link>
      </div>

      <div className="flex-none gap-2">
        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52 absolute right-0"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={NavbarVariants}
              >
                <motion.li variants={itemVariants}>
                  <Link to="/">Home</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/all-foods">All Foods</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/gallery">Gallery</Link>
                </motion.li>

                {user ? (
                  <>
                    <motion.li variants={itemVariants}>
                      <Link to="/my-food">My Food</Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link to="/add-food">Add Food</Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link to="/my-order">My Order</Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link to="/payment-history">Payment History</Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <button
                        onClick={handlelogOut}
                        className="bg-[#F44336] text-white flex justify-center items-center hover:bg-[#F44336]"
                      >
                        Logout
                      </button>
                    </motion.li>
                  </>
                ) : (
                  <motion.li variants={itemVariants}>
                    <Link to="/login">Login</Link>
                  </motion.li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* PC Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="menu menu-horizontal p-0 dark:text-white">
            <li>
              <Link className="focus:text-white text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="focus:text-white text-white" to="/all-foods">
                All Foods
              </Link>
            </li>
            <li>
              <Link className="focus:text-white text-white" to="/gallery">
                Gallery
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <button
                    onClick={() => handlelogOut()}
                    className="bg-[#F44336] text-white hover:bg-[#F44336] focus:bg-[#F44336] focus:text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="focus:text-white text-white" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          {user && (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                aria-label="User Menu"
              >
                <div className="w-11 rounded-full">
                  <img
                    alt="User Profile"
                    src={
                      user?.photoURL ||
                      'https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png'
                    }
                  />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-gray-900"
              >
                <li>
                  <Link className="focus:text-white" to="/my-food">
                    My Food
                  </Link>
                </li>
                <li>
                  <Link className="focus:text-white" to="/add-food">
                    Add Food
                  </Link>
                </li>
                <li>
                  <Link className="focus:text-white" to="/my-order">
                    My Order
                  </Link>
                </li>
                <li>
                  <Link className="focus:text-white" to="/payment-history">
                    Payment History
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handlelogOut}
                    className="bg-[#F44336] text-white flex justify-center items-center hover:bg-[#F44336] focus:bg-[#F44336] focus:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
