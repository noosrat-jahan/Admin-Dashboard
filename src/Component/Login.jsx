import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login is successfull",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  };

  return (
    <div>
      <div className="card bg-gray-100 mx-auto lg:w-4/12  w-10/12 mt-10 rounded-none  shrink-0 shadow-xl">
        <h1 className="text-2xl text-blue-900 font-bold">Sign In</h1>
        <form className="card-body p-0 md:p-4" onSubmit={handleLogin}>
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
          <p className="text-sm text-blue-600">
            Don't have an account? Please <Link to="/register" className="font-bold">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
