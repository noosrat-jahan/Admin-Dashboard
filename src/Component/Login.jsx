import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    
        const handleLogin = e =>{
            e.preventDefault()
    
            const form = e.target             
            const email = form.email.value
            const password = form.password.value
    
            loginUser(email, password)
            .then((result) =>{
                const user = result.user 
                console.log(user)
            })
            .catch(err=>{
                console.log('Error:', err.message)
            })
    
        }
        
  return (
    <div>
      <div className="card bg-gray-100 mx-auto w-full max-w-sm shrink-0 shadow-xl">
        <h1>Sign In</h1>
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p>Don't have an account? Please <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
