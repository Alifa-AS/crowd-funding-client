import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from "react-router-dom";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(AuthContext); // Get user info from context

  useEffect(() => {
    fetch(`http://localhost:5000/myCampaign?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const userCampaigns = data.filter(
          (campaign) => campaign.email === user?.email
        );
        setCampaigns(userCampaigns);
      })
      .catch((error) => console.error("ERROR", error));
  }, [user]);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center my-6">
        My Campaign:{campaigns.length}
      </h2>
      {campaigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
        campaigns.map((campaign) => (
          <div key={campaign._id}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure className="w-1/3 overflow-hidden">
                <img
                  className="w-full h-64 object-cover"
                  src={campaign.image}
                  alt={campaign.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{campaign.title}</h2>
                <p>{campaign.amount}</p>
                <p>{campaign.description}</p>
                <div className="card-actions justify-end">
                  <NavLink to={`/details/${campaign._id}`}>
                    <button className="btn bg-[#4157eb] text-white">
                      See More
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      ) : (
        <p>No Campaigns Available!</p>
      )}
    </div>
  );
};

export default MyCampaign;
