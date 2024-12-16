import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(AuthContext); // Get user info from context

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#85D630",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/myCampaign/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });

              const remainingCampaigns = campaigns.filter(campaign => campaign._id !== _id);
              setCampaigns(remainingCampaigns)
            }
          });
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myCampaign?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const userCampaigns = data.filter(
            (campaign) => campaign.email === user?.email
          );
          setCampaigns(userCampaigns);
        })
        .catch((error) => console.error("ERROR", error));
    }
  }, [user]);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center my-6">
        My Campaign:{campaigns.length}
      </h2>
      {campaigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign._id}>
              <div className="card card-side bg-base-100 shadow-xl m-2">
                <figure className="w-1/3 overflow-hidden">
                  <img
                    className="w-full h-64 object-cover p-4 rounded-3xl"
                    src={campaign.image}
                    alt={campaign.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{campaign.title}</h2>
                  <p className="font-semibold">Amount: {campaign.amount}</p>
                  <p>{campaign.description}</p>
                  <p className="font-semibold">Deadline: {campaign.deadline}</p>
                  <div className="card-actions justify-end">
                    <div className="join space-x-2">
                      <button className="btn join-item">
                        <FaEdit />
                      </button>
                     <Link to={`/updateCampaign/${campaign._id}`}>
                     <button className="btn join-item">Update</button>
                     </Link>
                      <button
                        onClick={() => handleDelete(campaign._id)}
                        className="btn join-item"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </div>
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
