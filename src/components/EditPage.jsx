import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function EditPage({ params }) {
  const navigate = useNavigate();
  const { _id, name, imageUrl, brandName, price, description, rating } =
    useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedImageUrl = formData.get("image");
    const updatedBrandName = formData.get("brandName");
    const updatedPrice = formData.get("price");
    const updatedName = formData.get("name");
    const updatedDescription = formData.get("description");
    const updatedRating = formData.get("rating");
    const updatedProduct = {
      updatedName,
      updatedImageUrl,
      updatedBrandName,
      updatedPrice,
      updatedDescription,
      updatedRating,
    };

    fetch(`http://https://b8a10-brand-shop-server-side-l9yw.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/");
      });
  };
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="image"
                name="image"
                className="input input-bordered"
                defaultValue={imageUrl}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                defaultValue={name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="brandName"
                placeholder="brandName"
                name="brandName"
                className="input input-bordered"
                defaultValue={brandName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="price"
                placeholder="price"
                name="price"
                className="input input-bordered"
                defaultValue={price}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                type="description"
                placeholder="description"
                name="description"
                className="input input-bordered"
                defaultValue={description}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="rating"
                placeholder="rating"
                name="rating"
                className="input input-bordered"
                defaultValue={rating}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
