import logo from "./logo.svg"
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Kategori from "./pages/Kategori"
import CheckOut from "./pages/CheckOut"
import MyOrder from "./pages/MyOrder"
import Profile from "./pages/Profile"
import ProfileSippingAddress from "./pages/ProfileSippingAddress"
import ProfileMyOrder from "./pages/ProfileMyOrder"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Kategori/:category",
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
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
