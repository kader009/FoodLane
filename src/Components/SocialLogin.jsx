import axios from 'axios';
import useAuth from '../Hooks/useAuth';

const SocialLogin = () => {
  const { google, github } = useAuth();

  const handleGoogle = () => {
    google().then((result) => {
      const userinfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };

      axios
        .post(`https://foodlane-server-api.onrender.com/user`, userinfo, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
        });
    });
  };

  const handleGithub = () => {
    github();
  };

  return (
    <div>
      <div className="flex justify-between space-x-4">
        <button
          onClick={() => handleGithub()}
          type="button"
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.173c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.998.107-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.267 1.983-.399 3.003-.404 1.02.005 2.046.137 3.005.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.649.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.624-5.48 5.921.43.372.815 1.104.815 2.222v3.293c0 .322.215.694.825.577 4.765-1.589 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </button>

        <button
          onClick={() => handleGoogle()}
          type="button"
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              fill="#4285F4"
              d="M47.532 24.551c0-1.621-.145-3.187-.417-4.684H24v9.141h13.224c-.57 2.937-2.204 5.414-4.705 7.078v5.868h7.599c4.45-4.104 7.034-10.149 7.034-17.403z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.391 0 11.737-2.13 15.649-5.797l-7.599-5.868c-2.107 1.414-4.773 2.26-8.05 2.26-6.191 0-11.439-4.18-13.305-9.787H2.86v6.117C6.761 42.248 14.76 48 24 48z"
            />
            <path
              fill="#FBBC05"
              d="M10.695 28.808A13.908 13.908 0 0 1 9.524 24c0-1.683.293-3.314.819-4.808V13.075H2.86A24.004 24.004 0 0 0 0 24c0 3.708.859 7.206 2.86 10.925l7.835-6.117z"
            />
            <path
              fill="#EA4335"
              d="M24 9.539c3.492 0 5.978 1.514 7.352 2.779l5.413-5.352C33.598 3.745 28.747 2 24 2 14.76 2 6.761 7.752 2.86 17.808l7.835 6.117C12.561 18.732 17.809 14.551 24 14.551z"
            />
          </svg>
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
