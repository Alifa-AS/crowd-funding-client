import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

const UpdateCampaign = () => {
    const campaign = useLoaderData();
    console.log(campaign);

  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleUpdateCampaign = (e) => {
    e.preventDefault();

    const form = e.target;
    const formattedDate = startDate.toISOString();
    const name = user.displayName;
    const email = user.email;
    const title = form.title.value;
    const type = form.type.value;
    const amount = form.amount.value;
    const description = form.description.value;
    const image = form.image.value;

    const updatedCampaign = {
      name,
      email,
      title,
      type,
      amount: parseInt(amount),
      deadline: new Date(formattedDate),
      image,
      description,
    };
    console.log(updatedCampaign);

    // send data to the server
    fetch(`http://localhost:5000/updateCampaign/${campaign._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Campaign updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });

          navigate("/myCampaign");

        } else {
          Swal.fire({
            title: "Error",
            text: "No changes detected or update failed",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      })
      .catch((error) => {
        console.error("ERROR adding campaign:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

    return (
         <div
              className="my-20"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="bg-base-200 p-20">
                <h2 className="text-3xl font-extrabold text-center py-2">Update Campaign</h2>
                <p className='text-center py-4 font-semibold'>{campaign.title}</p>
                <form onSubmit={handleUpdateCampaign}>
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
                          defaultValue={campaign.title}
                          placeholder="Campaign title"
                          className="input input-bordered w-full"
                          required
                        />
                      </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">Campaign Type</span>
                        </div>
                        <select className="select select-bordered w-full" 
                        name="type" 
                        defaultValue={campaign.type}>
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
                          defaultValue={campaign.amount}
                          placeholder="Donation Amount"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
        
                    {/* date and time */}
                    <div className="md:w-1/2 ml-4">
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">DeadLine</span>
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
                          defaultValue={campaign.description}
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
                          defaultValue={campaign.image}
                          placeholder="Image URL"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Update Campaign"
                    className="btn btn-block bg-[#5b71ff] text-white font-bold"
                  />
                </form>
              </div>
            </div>
    );
};

export default UpdateCampaign;