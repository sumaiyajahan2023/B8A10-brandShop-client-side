import React from "react";

export default function Banner() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/tKC5k2J/andras-vas-Bd7g-Nn-WJBk-U-unsplash.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Tech Paradise!</h1>
          <p className="py-6">
          Your One-Stop Shop for the Latest Electronics and Gadgets.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
}
