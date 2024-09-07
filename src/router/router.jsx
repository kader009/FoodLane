import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About/About';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Account/Login';
import Register from '../Pages/Account/Register';
import AllFood from '../Pages/AllFood';
import Gallery from '../Pages/Gallery';
import MyFood from '../Pages/profile/MyFood';
import AddFood from '../Pages/profile/AddFood';
import MyOrder from '../Pages/profile/MyOrder';
import SingleFood from '../Pages/SingleFood';
import EditItem from '../Pages/EditItem';
import PurchasePage from '../Pages/PurchasePage';
import PrivateRoute from './private/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        path: '/my-food',
        element: <MyFood />,
      },
      {
        path: 'my-food/editItem/:id',
        element: <EditItem />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foodData/get/${params.id}`),
      },
      {
        path: '/add-food',
        element: <AddFood />,
      },
      {
        path: '/my-order',
        element: <MyOrder />,
      },
      {
        path: 'single-food/:id',
        element: <SingleFood />,
      },
      {
        path: '/purchase/:id',
        element: (
          <PrivateRoute>
            <PurchasePage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foodData/get/${params.id}`),
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
