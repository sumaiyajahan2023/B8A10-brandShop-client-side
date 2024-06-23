import React from "react";

export default function AddProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const imageUrl = formData.get("image");
    const brandName = formData.get("brandName");
    const price = formData.get("price");
    const name = formData.get("name");
    const description = formData.get("description");
    const rating = formData.get("rating");
    const product = {
      name,
      imageUrl,
      brandName,
      price,
      description,
      rating,
    };

    fetch("https://b8a10-brand-shop-server-side-l9yw.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        e.target.reset();
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
