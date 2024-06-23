import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default function SignUp() {
  const navigate = useNavigate();
  const { createUser, setLoading, loading } = useContext(AuthContext);
  // console.log(userInfo)
  // setLoading(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    createUser(email, password)
      .then((result) => {
        const createdAt = result.user.metadata.creationTime;
        const user = { name, email, password, createdAt: createdAt };

        fetch("http://https://b8a10-brand-shop-server-side-l9yw.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        e.target.reset();
        setLoading(false);
        console.log(result);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="text-center w-full lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Get exciting offers.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
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
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p>
              Already have an account?{" "}
              <NavLink to="/login">Log In here.</NavLink>
            </p>
          </form>
        </div>
      </div>
      {loading && <span className="loading loading-spinner text-accent"></span>}
    </div>
  );
}
