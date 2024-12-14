import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const { user } = useContext(AuthContext); // Get user info from context

  useEffect(() => {
    fetch(`http://localhost:5000/donations?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data); // Set donations data
      })
      .catch((error) => console.error("ERROR", error));
  }, [user]);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center my-6">
        My Donations: {donations.length}
      </h2>
      {donations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div key={donation._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{donation.campaignTitle}</h2>
                <p className="text-gray-600">
                  <span className="font-bold">Amount Donated:</span> ${donation.amount}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Date:</span> {new Date(donation.date).toLocaleDateString()}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Campaign:</span> {donation.campaignName}
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
