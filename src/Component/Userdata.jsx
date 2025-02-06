import React from "react";

const Userdata = ({ user, index }) => {
  return (
    <>
      <tr>
        <td className="px-3 text-2xl font-medium text-gray-400 dark:text-gray-600">{index + 1}</td>
        <td className="px-3 py-2">
          <p>{user.name}</p>
        </td>
        <td className="px-3 py-2">          
          <p className="text-gray-400 dark:text-gray-600">{user.email}</p>
        </td>
        <td className="px-3 py-2">
          <p>{user.phone}</p>
        </td>
        <td className="px-3 py-2">
          <p>{user.address.city}</p>
        </td>
        <td className="px-3 py-2">         
          <p className="text-gray-400 dark:text-gray-600">{user.website}</p>
        </td>
        
      </tr>
    </>
  );
};

export default Userdata;
