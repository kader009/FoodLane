import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About/About';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Account/Login';
import Register from '../Pages/Account/Register';
import AllFood from '../Pages/AllFood';
import Gallery from '../Pages/Gallery';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/all-foods',
        element: <AllFood />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);
