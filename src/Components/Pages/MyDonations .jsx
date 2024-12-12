import React from 'react';
import UseAuth from '../Hooks/UseAuth';

const MyDonations  = () => {
    const {user} = UseAuth()
    return (
        <div>
            donation
        </div>
    );
};

export default MyDonations ;