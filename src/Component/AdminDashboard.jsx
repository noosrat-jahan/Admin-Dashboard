import React from "react";
import { RiMenuFold2Fill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const AdminDashboard = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex lg:gap-7">
      <div className="lg:w-3/12 w-4/12 bg-teal-200 min-h-screen hidden md:block">
        <div className="my-10 ">
          <Link
            to="/"
            className=" lg:text-2xl text-xl font-bold text-amber-700 underline"
          >
            Admin Dashboard
          </Link>
        </div>
        <ul className=" space-y-10">
          <li>
            <NavLink
              to="all-users"
              className="text-lg text-purple-900 font-bold bg-amber-200 lg:px-10 px-5 py-2 rounded-md"
            >
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className="text-lg text-purple-900 font-bold bg-amber-200 lg:px-10 px-5 py-2 rounded-md"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="lg:w-10/12 md:w-9/12 w-11/12 mx-auto">
        <div className="md:hidden  text-right my-5">
          <Button onClick={toggleDrawer(true)}>
            <RiMenuFold2Fill className="text-3xl text-green-700 " />
          </Button>
        </div>
        <Outlet></Outlet>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 255, height: "100vh" }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <div className=" bg-teal-200 min-h-full  md:hidden">
            <div className="py-10 px-5 ">
              <Link
                to="/"
                className=" text-2xl font-bold text-amber-700 underline"
              >
                Admin Dashboard
              </Link>
            </div>
            <ul className=" pl-5 space-y-10">
              <li>
                <NavLink
                  to="all-users"
                  className="text-lg text-purple-900 font-bold bg-amber-200 px-10 py-2 rounded-md"
                >
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="products"
                  className="text-lg text-purple-900 font-bold bg-amber-200 px-10 py-2 rounded-md"
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default AdminDashboard;
