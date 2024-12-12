import React from "react";
import { NavLink } from "react-router-dom";

const UsersTable = ({ user, index }) => {
  const { _id, image, name, email } = user;

  return (
    <tr className="hover:bg-gray-100">
      {/* Serial Number */}
      <td className="border px-4 py-2 text-center">{index + 1}</td>

      {/* User Image */}
      <td className="border px-4 py-2 text-center">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>

      {/* User Name */}
      <td className="border px-4 py-2 text-left">
        <div className="font-bold">{name}</div>
      </td>

      {/* User Email */}
      <td className="border px-4 py-2 text-left">{email}</td>

      {/* Actions */}
      <td className="border px-4 py-2 text-center">
        <NavLink to={`/details/${_id}`}>
          <button className="btn bg-[#4157eb] text-white">See More</button>
        </NavLink>
      </td>
    </tr>
  );
};

export default UsersTable;
