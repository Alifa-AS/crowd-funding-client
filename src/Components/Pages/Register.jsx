import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register.json";
import { useTypewriter } from 'react-simple-typewriter'

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [typeEffect] = useTypewriter({
    words: ['stands for Creative Ideas', 'Start Up', 'personal needs'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  const [typeEffects] = useTypewriter({
    words: ['Register Now!'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })


  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("form register", name, photo, email, password);

    if (password.length < 6) {
      toast.error("Password should at least 6 characters");
      return;
    }

    // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    // if (!passwordRegex.test(password)) {
    //     toast.error('Password must include an uppercase letter, a lowercase letter, a number, and a special character');
    //     return;
    // }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter");
      return;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter");
      return;
    }

    // Check for at least one digit
    if (!/[0-9]/.test(password)) {
      toast.error("Password must include at least one number");
      return;
    }

    // Check for at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
      toast.error(
        "Password must include at least one special character (!@#$%^&*)"
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };
        //save new user info
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to db", data);
            if (data.insertedId) {
              console.log("user Created in db");
            }
          });

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              title: "Registration Successful!",
              text: "Welcome to the platform!",
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => navigate("/"));
          })
          .catch((error) => {
            console.log(error);
            toast.error("Failed to update profile. Try again.");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`Error: ${errorMessage}`);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="my-10">
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <h1 className="font-semibold">Our CrowdClub
                <span className="font-bold pl-2 text-xl text-green-600">{typeEffect}</span>
              </h1>
              <div className="text-center lg:text-left w-96">
                <Lottie animationData={registerLottieData} />
              </div>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center py-2">
          <span className="font-bold pl-2 text-indigo-600">{typeEffects}</span>
          </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p>
                  Already Have an account?{" "}
                  <span className="text-green-500 font-bold underline">
                    <Link to="/login">Login</Link>
                  </span>{" "}
                  Now
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
