import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('form register', name, photo, email, password);

        createNewUser(email, password)
        .then((result) => {
           const user = result.user;
           setUser(user)
           updateUserProfile({displayName:name, photoURL:photo})
           .then(()=>{
            navigate("/")
           })
           .catch((error) =>{
            console.log(error)
           })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }


    return (
        <div className='my-10'>
           <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col">
            <div className="text-center">
            <h1 className="text-4xl font-bold">Register now!</h1>
            <p className="py-3">
                You don't have any account yet? To Become our part please register! 
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            
            <form onSubmit={handleRegister} className="card-body">
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                <div>
                    <p>Already Have an account? <span 
                    className='text-green-500 font-bold underline'>
                    <Link to="/login">Login</Link></span> Now</p>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;