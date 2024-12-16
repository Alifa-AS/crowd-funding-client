import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UsersTable from "./UsersTable";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  return (
    <div className="py-20">
      <h2 className="text-3xl text-center font-bold mb-8">
        All Users : {users.length}
      </h2>
      <div
        className="overflow-x-auto"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <table className="table w-full border">
          {/* Table Header */}
          <thead className="bg-[#4157eb] text-white">
            <tr>
              <th>Serial</th>
              {/* <th>Image</th> */}
              <th>Name</th>
              <th>Email</th>
             
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {users.map((user, idx) => (
              <UsersTable key={user._id} user={user} index={idx}></UsersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
