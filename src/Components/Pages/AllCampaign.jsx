import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCards from './AllCards';

 const AllCampaign = () => {
 const loadedCampaigns = useLoaderData();
 const[campaigns, setCampaigns] = useState(loadedCampaigns);
 
 const handleSort = () =>{
  const sortedCampaigns = [...campaigns].sort((a,b)=> a.amount - b.amount);
  setCampaigns(sortedCampaigns);
 }

  
    return ( 
        <div className='py-20'>
           <div className='flex justify-between p-6'>
           <h1 className='font-bold text-xl'>All Campaigns : {campaigns.length}</h1>
            <button onClick={handleSort}
            className='btn text-[#4157eb] border-blue-500'>
              Sort
            </button>
           </div>
           <div className="overflow-x-auto" data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                <table className="table w-full border">
                    {/* Table Header */}
                    <thead className="bg-[#4157eb] text-white">
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                    {
                        campaigns.map((campaign ,idx)=> <AllCards 
                        key={campaign._id}
                        campaign={campaign}
                        index={idx}
                        ></AllCards>)
                        }           
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;
