import React from 'react';
import { NavLink } from 'react-router-dom';

const AllCards = ({ campaign, index }) => {

    const {_id, name, email, title, type, amount, deadline, image} = campaign;

    return (
        <tr className="hover:bg-gray-100">
        {/* Serial */}
        <th>{index + 1}</th>

        {/* Image */}
        <td>
            <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                        src={image}
                        alt={name}
                    />
                </div>
            </div>
        </td>

        {/* Name */}
        <td>
            <div className="font-bold">{name}</div>
            <div>{email}</div>
        </td>
        <td>${amount}</td>
        <td>{type}</td>
        <td>{deadline}</td>

        {/* Actions */}
        <td>
               <NavLink to={`/details/${_id}`}>
               <button className="btn bg-[#4157eb] text-white">
                See More
               </button>
               </NavLink>
        </td>
    </tr>
      
    );
};

export default AllCards;