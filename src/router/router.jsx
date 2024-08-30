import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About/About';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage';

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
    ],
  },
]);
