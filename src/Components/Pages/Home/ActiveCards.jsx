import React from 'react';

const ActiveCards = ({ campaign }) => {
    const {name, email, title, type, amount, deadline, image, description} = campaign;
    
    return (
        <div>
          <div className="card bg-base-100 shadow-xl w-full max-w-md mx-auto lg:max-w-lg flex flex-col">
            <figure>
                <img
                src={image}
                alt={type} 
                className='w-full h-56 object-cover'/>
            </figure>
            <div className="card-body flex flex-col h-full">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='font-semibold text-xs '>{title}</p>
    
                <hr />
                <p className='font-semibold'>Type : {type}</p>
                <p><span className='font-semibold'>Amount </span>: {amount}</p>
                <p><span className='font-semibold'>Deadline</span> : {deadline}</p>
                <hr />
                <p className='font-thin text-[14px]'>{description}</p>

                <div className="join join-vertical lg:join-horizontal mt-4 gap-4">
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ActiveCards;