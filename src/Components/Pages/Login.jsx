import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginLottieData from "../../assets/lottie/login.json";
import { useTypewriter } from 'react-simple-typewriter'

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [typeEffect] = useTypewriter({
      words: ['Login Now!'],
      loop:{},
      typeSpeed: 100,
      deleteSpeed: 40
    })
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("form sign up", email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${user.displayName || "User"}!`,
        }).then(() => {
          navigate('/');
        });

        //update last login time
        const lastLoginTime = result?.user?.metadata?.lastLoginTime;
        // const loginInfo = { email,lastLoginTime };
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Email or Password is incorrect. Please try again.",
        });
      });
  };
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${user.displayName || "User"}!`,
        })
        .then(() =>{
            navigate('/')
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Email or Password is incorrect. Please try again.",
        });
      });
  };

  return (
    <div className="my-12">
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <div className="text-center lg:text-left w-80">
                <Lottie animationData={loginLottieData} />
              </div>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold py-2 text-center">
          <span className="font-bold pl-2 text-indigo-600">{typeEffect}</span>
          </h1>
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-5">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>
                  Don't Have any account?{" "}
                  <span className="text-red-600 font-bold underline">
                    <Link to="/register">Register</Link>
                  </span>{" "}
                  Now
                </p>
              </div>
              <div>
                <button onClick={handleGoogleLogin} className="btn">
                  Google Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
