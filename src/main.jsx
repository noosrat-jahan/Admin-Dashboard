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

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/all-users",
        element: <AllUsers></AllUsers>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
