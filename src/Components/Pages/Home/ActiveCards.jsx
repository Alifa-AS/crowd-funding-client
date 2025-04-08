import React from "react";
import { NavLink } from "react-router-dom";

const ActiveCards = ({ campaign }) => {
  const {
    _id,
    name,
    email,
    title,
    type,
    amount,
    deadline,
    image,
    description,
  } = campaign;

  return (
    <div className="card w-full max-w-md lg:max-w-lg mx-auto bg-base-100 shadow-xl rounded-xl overflow-hidden">
      <figure className="p-4">
        <img
          src={image}
          alt={type}
          className="w-full h-52 object-cover rounded-xl"
        />
      </figure>

      <div className="card-body flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-lg font-bold">{name}</h2>
          <div className="badge badge-secondary">NEW</div>
        </div>

        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-xs font-semibold text-gray-800">{title}</p>

        <hr className="my-2" />

        <p className="font-semibold">
          Type: <span className="font-normal">{type}</span>
        </p>
        <p className="font-semibold">
          Amount: <span className="font-normal">{amount}</span>
        </p>
        <p className="font-semibold">
          Deadline: <span className="font-normal">{deadline}</span>
        </p>
        <div className="card-actions justify-end mt-4">
          <NavLink
            to={`/details/${_id}`}
            className="btn bg-[#4157eb] text-white hover:bg-[#3244c7] transition"
          >
            See More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ActiveCards;
