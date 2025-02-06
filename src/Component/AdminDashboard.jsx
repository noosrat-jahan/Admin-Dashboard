import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex gap-7">
      <div className="w-3/12 bg-teal-200 min-h-screen ">
        <h1 className="my-10 text-2xl font-bold text-amber-700 underline">
          Admin Dashboard
        </h1>
        <ul className=" space-y-10">
          <li>
            <NavLink to="all-users" className="text-lg text-purple-900 font-bold bg-amber-200 px-10 py-2 rounded-md">
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="products" className="text-lg text-purple-900 font-bold bg-amber-200 px-10 py-2 rounded-md">
              Products
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashboard;
