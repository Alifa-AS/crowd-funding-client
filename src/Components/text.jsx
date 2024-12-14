import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ActiveCards from "./ActiveCards";
import { AuthContext } from "../../../provider/AuthProvider";
import Loading from "../Loading";

const Active = () => {
  const campaigns = useLoaderData();
  console.log("Raw Campaign Data:", campaigns);

  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  // Campaign filter with proper date handling
  const validCampaigns = campaigns.filter((campaign) => {
    const currentDate = new Date();
    const campaignDeadline = new Date(campaign.deadline);
    
    // Make sure both dates are valid
    if (isNaN(campaignDeadline.getTime())) {
      console.error("Invalid deadline for campaign:", campaign);
      return false;
    }
    
    return campaignDeadline >= currentDate;
  });

  console.log("Valid Campaigns:", validCampaigns);

  // Limit to 6 campaigns
  const activeCampaigns = validCampaigns.slice(0, 6);
  console.log("Limited Campaigns (6 max):", activeCampaigns);

  // If no campaign
  if (activeCampaigns.length === 0) {
    return <div>No active campaigns available.</div>;
  }

  return (
    <div>
      <h1>Active Campaigns: {activeCampaigns.length}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
            activeCampaigns.map((campaign) => (
                <ActiveCards key={campaign._id} campaign={campaign} />
            ))
        }
        
      </div>
    </div>
  );
};

export default Active;
