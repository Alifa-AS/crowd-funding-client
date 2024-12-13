import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleAddCampaign = (e) => {
    e.preventDefault();

    const form = e.target;
    const formattedDate = startDate.toLocaleDateString("en-CA");
    const name = user.displayName;
    const email = user.email;
    const title = form.title.value;
    const type = form.type.value;
    const amount = form.amount.value;
    const description = form.description.value;
    const image = form.image.value;

    const newCampaign = {
      name,
      email,
      title,
      type,
      amount,
      deadline: formattedDate,
      image,
      description,
    };
    console.log(newCampaign);

    // send data to the server
    fetch("http://localhost:5000/campaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Campaign added successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          navigate("/myCampaign");
        } else {
          console.log("Failed to add");
        }
      })
      .catch((error) => console.error("ERROR adding campaign:", error));
  };

  return (
    <div
      className="my-20"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="bg-base-200 p-24">
        <h2 className="text-3xl font-extrabold">Add Campaign</h2>
        <form onSubmit={handleAddCampaign}>
          {/* form row 1*/}
          <div className="md:flex mb-8">
            <div className="md:w-1/2 ml-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  defaultValue={user.displayName}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
            <div className="md:w-1/2 ml-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Email"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>
          {/* form row 2*/}
          <div className="md:flex mb-8">
            <div className="md:w-1/2 ml-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Campaign Title</span>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Campaign title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md:w-1/2 ml-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Campaign Type</span>
                </div>
                <select className="select select-bordered w-full" name="type">
                  <option disabled selected>
                    Campaign Type
                  </option>
                  <option>StartUp</option>
                  <option>Creative Ideas</option>
                  <option>personal Issue</option>
                  <option>business</option>
                </select>
              </label>
            </div>
          </div>
          {/* form row 3*/}
          <div className="md:flex mb-8">
            <div className="md:w-1/2 ml-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Minimum Donation Amount</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  placeholder="Donation Amount"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* date and time */}
            <div className="md:w-1/2 ml-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">DeadeLine</span>
                  <FaCalendarAlt />
                </div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* description */}
          <div className="ml-4 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  placeholder="description"
                  name="description"
                  className="textarea textarea-bordered textarea-sm w-full"
                ></textarea>
              </label>
            </div>
          </div>
          {/* image row 3*/}
          <div className="ml-4 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Image URL</span>
                </div>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Campaign"
            className="btn btn-block bg-[#5b71ff] text-white font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
