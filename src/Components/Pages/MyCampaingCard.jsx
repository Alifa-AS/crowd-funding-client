import React from 'react';
import { Link } from 'react-router-dom';

const MyCampaignCard = ({ campaign }) => {
    return (
        <div>
            <h3>{campaign.title}</h3>
            <p>{`campaign.description/${campaign._id}`}</p>
            <p>{campaign.description.slice(0,100)}...</p>
            <Link to={`/campaign/${campaign._id}`}>
            <button className='btn btn-primary'>See More</button>
            </Link>
        </div>
    );
};

export default MyCampaignCard;