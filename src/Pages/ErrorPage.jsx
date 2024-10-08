import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4 py-8">
      <div className="mb-8">
        {/* Animated Illustration */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 h-48 mx-auto text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" className="text-[#F44336]">
            <animate
              attributeName="cy"
              values="12;6;12"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <p className="mb-8">We can not find the page you are looking for.</p>
      <Link
        to="/"
        className="bg-[#F44336] hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;