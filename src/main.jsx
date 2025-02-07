import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from './Component/AdminDashboard.jsx';
import AllUsers from './Component/AllUsers.jsx';
import Products from './Component/Products.jsx';
import AdminHome from './Component/AdminHome.jsx';
import UserDetails from './Component/UserDetails.jsx';
import AddProducts from './Component/AddProducts.jsx';
import ProductDetails from './Component/ProductDetails.jsx';
import Login from './Component/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/",
        element: <AdminHome></AdminHome>
      },
      {
        path: "/all-users",
        element: <AllUsers></AllUsers>
      },
      {
        path: "/all-users/:id",
        element: <UserDetails></UserDetails>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params})=>fetch(`https://api.restful-api.dev/objects/${params.id}`)
      },
      {
        path: "/add-products",
        element: <AddProducts></AddProducts>
      },
    ]
  },
  {
    path: "login",
    element: <Login></Login>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
