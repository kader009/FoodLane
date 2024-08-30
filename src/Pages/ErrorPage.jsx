import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4 py-8">
      <div className="mb-8">
        {/* Illustration */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 h-48 mx-auto text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h18v18H3V3zm3 3h12v12H6V6zm6 4h6m-6 4h6M6 12h6m6 4h-6m0-8h6m-6 4h6"
          />
        </svg>
      </div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <p className="mb-8">We can't find the page you're looking for.</p>
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