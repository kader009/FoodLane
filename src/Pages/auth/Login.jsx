import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useEffect } from 'react';
import axios from 'axios';
import SocialLogin from '../../Components/SocialLogin';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Login = () => {
  const { user, signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, from, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    signIn(email, password).then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      const user = { email };
      toast.success('User log in successfully')

      axios
        .post('https://foodlane-server-api.onrender.com/jwt', user, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        });
    });
  };

  return (
    <div>
      <Helmet>
        <title>FoodLane | Login</title>
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-black">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-950 p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6"
        >
          <h2 className="text-white text-3xl font-bold text-center mb-6">
            Login
          </h2>

          {/* Display demo credentials at the top */}
          <div className="text-center text-white mb-4">
            <p>Demo Credentials:</p>
            <p>
              Email: <span className="text-[#F44336]">adil@gmail.com</span>
            </p>
            <p>
              Password: <span className="text-[#F44336]">78757278</span>
            </p>
          </div>

          <div>
            <label className="text-white block mb-2">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="text-white block mb-2">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#F44336] text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            Login
          </button>

          <div className="text-center text-white mt-6">
            <p>
              New To Here
              <Link to={'/register'} className="text-[#F44336] ms-2">
                Register
              </Link>
            </p>
          </div>

          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
