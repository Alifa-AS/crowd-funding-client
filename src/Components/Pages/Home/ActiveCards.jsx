import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveCards = ({ campaign }) => {
    const {_id, name, email, title, type, amount, deadline, image, description} = campaign;
    
    return (
        <div>
          <div className="card bg-base-100 shadow-xl w-full max-w-md mx-auto lg:max-w-lg flex flex-col rounded-xl">
            <figure>
                <img
                src={image}
                alt={type} 
                className='w-full h-52 object-cover p-4'/>
            </figure>
            <div className="card-body flex flex-col h-full">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{email}</p>
                <p className='font-semibold text-xs '>{title}</p>
    
                <hr />
                <p className='font-semibold'>Type : {type}</p>
                <p><span className='font-semibold'>Amount </span>: {amount}</p>
                <p><span className='font-semibold'>Deadline</span> : {deadline}</p>
                <hr />
                <p className='font-thin text-[14px]'>{description}</p>
                {/* button */}
                <div className="card-actions justify-end">
                <button className="btn bg-[#4157eb] text-white">
                    <NavLink to={`/details/${_id}`}>See More</NavLink>
                </button>
                </div>

            </div>
            </div>
        </div>
    );
};

export default ActiveCards;