import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
  
    createUser(email, password).then(() => {
      updateUserProfile(name, photo).then(() => {
        const userInfo = { name, email, photo };
  
        axios.post(`https://foodlane-server-api.onrender.com/user`, userInfo).then((res) => {
          if (res.data.status === 'exists') {
            toast.error(res.data.message);  // User already exists
          } else if (res.data.insertedId) {
            toast.success('User added successfully');  // New user added
          }
          reset(); // Clear the form after checking response
        });
      });
    });
  };
  

  return (
    <div>
      <Helmet>
        <title>FoodLane | Register</title>
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-black">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-950 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6 my-6"
        >
          <h2 className="text-white text-3xl font-bold text-center mb-6">
            Register
          </h2>

          <div>
            <label className="text-white block mb-2">Name</label>
            <input
              type="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label className="text-white block mb-2">Photo Url</label>
            <input
              type="photo"
              {...register('photo', { required: 'Photo url is required' })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.photo.message}
              </span>
            )}
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
            Register
          </button>

          <div className="text-center text-white mt-6">
            <p>
              Already Have an Account
              <Link to={'/login'} className="text-[#F44336] ms-2">
                Login
              </Link>
            </p>
          </div>

          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Register;
