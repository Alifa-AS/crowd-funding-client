import React from 'react';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('form sign up', name, email,password)
    }
  

    return (
        <div className='my-12'>
           <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-4xl font-bold">Login now!</h1>
                <p className="py-5">
                    You don't have any account yet? To Become our part please register! 
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-5">
                    <button className="btn btn-primary">Login</button>
                    </div>
                        <div>
                        <p>Don't Have any account? <span className='text-red-600 font-bold underline'> Register</span> Now</p>
                       </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;