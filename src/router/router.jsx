import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/about/About';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/home/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/auth/Login';
import Register from '../Pages/auth/Register';
import AllFood from '../Pages/AllFood';
import Gallery from '../Pages/Gallery';
import MyFood from '../Pages/food/MyFood';
import AddFood from '../Pages/food/AddFood';
import MyOrder from '../Pages/food/MyOrder';
import SingleFood from '../Pages/SingleFood';
import EditItem from '../Pages/EditItem';
import PurchasePage from '../Pages/PurchasePage';
import PrivateRoute from './private/PrivateRoute';
import Payment from '../Components/Payment';
import PaymentHistory from '../Components/PaymentHistory';

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
          fetch(
            `https://foodlane-server-api.onrender.com/foodData/get/${params.id}`
          ),
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
          fetch(
            `https://foodlane-server-api.onrender.com/foodData/get/${params.id}`
          ),
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
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />,
      },
    ],
  },
]);
