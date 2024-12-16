import React from "react";
import { NavLink } from "react-router-dom";

const UsersTable = ({ user, index }) => {
  const { _id, name, email } = user;

  return (
    <tr className="hover:bg-gray-100">
      {/* Serial Number */}
      <td className="border px-4 py-2 text-center">{index + 1}</td>

      {/* User Image */}
      {/* <td className="border px-4 py-2 text-center">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={user?.photoURL}  alt={name} />
          </div>
        </div>
      </td> */}

      {/* User Name */}
      <td className="border px-4 py-2 text-left">
        <div className="font-bold">{name}</div>
      </td>

      {/* User Email */}
      <td className="border px-4 py-2 text-left">{email}</td>
      
    </tr>
  );
};

export default UsersTable;
