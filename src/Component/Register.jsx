import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration is successfull",
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
      <div className="flex justify-start ml-5">
        <button className="text-left mt-5 btn btn-accent text-white">
          <Link to="/"> ⬅️ Back to dashboard</Link>
        </button>
      </div>
      <div className="card my-5 bg-gray-50 mx-auto lg:w-4/12  w-10/12 rounded-none shrink-0 shadow-xl">
        <h1 className="text-2xl text-blue-900 font-bold">Sign Up</h1>
        <form className="card-body p-0 md:p-4" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="email"
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-sm text-blue-600">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
