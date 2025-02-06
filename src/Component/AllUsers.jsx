import React, { useEffect, useState } from "react";
import Userdata from "./Userdata";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800 ">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead>
              <tr className="bg-gray-300 w-full text-center">
                <th className="p-3">Serial</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">City Name</th>
                <th className="p-3">Website</th>
                <th className="p-3"></th>
                
              </tr>
            </thead>
            <tbody className="border-b bg-gray-50   border-gray-700 dark:border-gray-300">
              {users.map((user, index) => (
                <Userdata key={user.id} user={user} index={index}></Userdata>
              ))}              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
