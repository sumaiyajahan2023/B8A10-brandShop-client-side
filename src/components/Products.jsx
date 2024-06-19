import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold">See our product catalog!</h2>
      <div className="grid grid-cols-3 gap-3 py-5">
        {products.map((product, index) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={index}>
            <figure>
              <img src={product.imageUrl} alt={product.name} />
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
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
