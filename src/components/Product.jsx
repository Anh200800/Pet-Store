import React from "react";
import product1 from "../assets/images/product1.png";

const Product = (data) => {
  return (
    {data.map((product) => (
    <div className="product">
      <div className="product-list">
        <div className="product-card">
          <img src={product.img} alt="" />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
       
        </div>
      </div>

    ))}
  );
};

export default Product;
