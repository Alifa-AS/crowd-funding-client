import { useNavigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const {
    _id,
    name,
    email,
    title,
    type,
    amount,
    deadline,
    image,
    description,
  } = useLoaderData();

  const [donationAmount, setDonationAmount] = useState("");
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);
  const navigate = useNavigate();

  //check if the deadline has passed
  useEffect(() => {
    const currentDate = new Date();
    const campaignDeadline = new Date(deadline);

    if (campaignDeadline < currentDate) {
      setIsDeadlinePassed(true);
    }
  }, [deadline]);

  const handleDonation = async () => {
    const donationData = {
      campaignId: _id,
      email: email,
      amount: donationAmount,
      donar_email: user?.email,
    };
    console.log(donationData)
    if (!donationAmount || donationAmount <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Amount",
        text: "Please enter a valid donation amount!",
      });
      return;
    }

    try {
      const response = await fetch("https://crowd-funding-server-dusky.vercel.app/donations", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Donation successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/myDonations");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Donation failed. Please try again!",
        });
      }
    } catch (error) {
      console.error("ERROR", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later!",
      });
    }
  };

  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  return (
    <div
      className="py-20"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="py-10 px-4 lg:px-20">
        <h1 className="font-bold text-3xl text-center mb-10">
          Campaign Details
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Type:</span> {type}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Target Amount:</span> ${amount}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Deadline:</span>{" "}
              {new Date(deadline).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-4">{description}</p>

            {isDeadlinePassed ? (
              // If the deadline is passed, show the message and disable donation input
              <p className="text-red-500 font-bold">
                Sorry, this campaign has ended. Donations are no longer
                accepted.
              </p>
            ) : (
              <>
                <input
                  type="number"
                  placeholder="Enter donation amount"
                  value={donationAmount}
                  onChange={handleDonationAmountChange}
                  className="border px-4 py-2 rounded-md w-full mb-4"
                ></input>
                <button
                  onClick={handleDonation}
                  className="px-6 py-2 bg-[#] text-white rounded-lg bg-[#5b71ff] hover:bg-indigo-700"
                >
                  Donate
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
