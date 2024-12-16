import React, { useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import Loading from "./Loading";

const MyDonations = () => {
  const { user } = useContext(AuthContext); // Get user info from context
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://crowd-funding-server-dusky.vercel.app/donations?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data); 
        setLoading(false)
      })
      .catch((error) => console.error("ERROR", error));
      setLoading(false);
  }, [user]);

  if(loading){
    return <Loading />
  }

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center my-6">
        My Donations: {donations.length}
      </h2>
      {donations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div key={donation._id} className="card bg-base-100 shadow-xl">
              <figure className="flex justify-center p-4">
                {/* Image */}
                {donation.image ? (
                  <img
                    src={donation.image}
                    alt={donation.title}
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-48 h-48 bg-gray-200 flex justify-center items-center rounded-lg">
                    <span>No Image</span>
                  </div>
                )}
              </figure>
              <div className="card-body">
                {/* Title */}
                <h2 className="card-title text-xl font-semibold text-center">
                  {donation.title}
                </h2>
                {/* Amount */}
                <p className="text-gray-600">
                  <span className="font-bold">Amount Donated:</span> ${donation.amount}
                </p>
                {/* Date */}
                <p className="text-gray-600">
                  <span className="font-bold">Date:</span>{" "}
                  {new Date(donation.date).toLocaleDateString()}
                </p>
                {/* Campaign Name */}
                <p className="text-gray-600">
                  <span className="font-bold">Campaign:</span> {donation.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Donations Found!</p>
      )}
    </div>
  );
};

export default MyDonations;
