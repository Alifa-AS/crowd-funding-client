import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Loading from "../Loading";
import ActiveCards from "./ActiveCards";

const Active = () => {
    const campaigns = useLoaderData();
    console.log("Campaign Data:", campaigns);

    const { loading } = useContext(AuthContext);
    if(loading){
        return <Loading />;
    }

    const validCampaigns = campaigns.filter((campaign)=>{
        const currentDate = new Date();
        const campaignDeadline = new Date(campaign.deadline);

        if(isNaN(campaignDeadline.getTime())){
            console.error("Invalid deadline For Campaign:", campaign);
            return false;
        }

        return campaignDeadline >= currentDate;
    });
    console.log("Valid Campaigns:", validCampaigns);

    //Limit to 6 
    const activeCampaigns = validCampaigns.slice(0,6);
    console.log("Limited Campaigns (6 max):", activeCampaigns);

    //if no campaign
    if(activeCampaigns.length === 0){
        return <div>No Campaigns Available.</div>
    }

  return (
    <div className="py-20">
      <h1 className="font-bold text-3xl text-center py-4">Active Campaigns : {activeCampaigns.length}</h1>
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
