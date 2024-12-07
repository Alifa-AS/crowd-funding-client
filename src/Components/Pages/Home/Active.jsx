import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ActiveCards from './ActiveCards';

const Active = () => {
    const campaigns = useLoaderData();

    return (
        <div className='my-20 p-4'>
            <h1 className='font-bold text-4xl text-center'>Active Campaign: {campaigns.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    campaigns.map(campaign => <ActiveCards key={campaign._id} campaign={campaign}></ActiveCards>)
                }
            </div>
        </div>
    );
};

export default Active;