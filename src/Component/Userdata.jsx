import React from "react";
import { Link } from "react-router-dom";

const Userdata = ({ user, index }) => {
  return (
    <>
      <tr className="border-b border-opacity-20 text-center border-gray-700 bg-gray-100">

        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <p>{user.name}</p>
        </td>
        <td className="p-3">
          <p>{user.email}</p>
        </td>
        <td className="p-3">
          <p>{user.phone}</p>
        </td>
        <td className="p-3">
          <p>{user.address.city}</p>
        </td>
        <td className="p-3 text-right">
          <p>{user.website}</p>
        </td>
        <td className="px-3 py-2">
          <Link to={`/all-users/${user.id}`} className="text-amber-700 font-bold underline dark:text-gray-600">View Details</Link>
        </td>
      </tr>
    </>
  );
};

export default Userdata;
