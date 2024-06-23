import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://b8a10-brand-shop-server-side-l9yw.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, [products]);

  const handleDeleteClick = (_id) => {
    console.log(_id)
    fetch(`https://b8a10-brand-shop-server-side-l9yw.vercel.app/products/${_id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold">See our product catalog!</h2>
      <div className="grid grid-cols-3 gap-3 py-5">
        {products.map((product, index) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={index}>
            <figure className="h-2/3">
              <img src={product.imageUrl} alt={product.name} className="h-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.name}!
                <div className="badge badge-secondary">{product.rating}</div>
              </h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end items-center">
                <div className="badge badge-outline">{product.brandName}</div>
                <div className="badge badge-outline">{product.price}$</div>
              </div>
              <div className="card-actions justify-around items-center">
                <button className="btn btn-primary">Details</button>
                <button className="btn btn-primary">
                  <NavLink to={`/products/${product._id}`}>Update</NavLink>
                </button>
                <button onClick={()=>{handleDeleteClick(product._id)}} className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
