import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = {};
  const logOut = {};
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
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-circle ">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-foods">All Foods</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/dashboard/profile">My Profile</Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="bg-[#F44336] text-white flex justify-center items-center hover:bg-blue-900"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* PC Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="menu menu-horizontal p-0 dark:text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-foods">All Foods</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            {user ? (
              <>
                <li>
                  <button onClick={logOut} className="bg-[#F44336] text-white hover:bg-[#F44336]">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-11 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user?.photoURL ||
                      'https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png'
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  bg-gray-900 rounded-box w-52"
              >
                <li>
                  <Link to="/my-food">My Food</Link>
                </li>
                <li>
                  <Link to="/add-food">Add Food</Link>
                </li>
                <li>
                  <Link to="/my-order">My Order</Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="bg-[#F44336] text-white flex justify-center items-center hover:bg-blue-800"
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
