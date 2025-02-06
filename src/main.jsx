import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from './Component/AdminDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard></AdminDashboard>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
