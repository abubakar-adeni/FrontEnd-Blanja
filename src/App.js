import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Kategori from "./page/Kategori"
import CheckOut from './page/CheckOut';
import MyOrder from "./page/MyOrder";
import Profile from "./page/Profile"
import ProfileSippingAddress from "./page/ProfileSippingAddress";
import ProfileMyOrder from "./page/ProfileMyOrder";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Kategori",
    element: <Kategori />,
  },
  {
    path: "/CheckOut",
    element: <CheckOut />,
  },
  {
    path: "/MyOrder",
    element: <MyOrder />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/ProfileSippingAddress",
    element: <ProfileSippingAddress />,
  },
  {
    path: "/ProfileMyOrder",
    element: <ProfileMyOrder />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
