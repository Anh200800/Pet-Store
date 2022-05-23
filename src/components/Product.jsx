import React from "react";
import product1 from "../assets/images/product1.png";

const Product = () => {
  return (
    <div className="product">
      <div className="product-list">
        <div className="product-card">
          <img src={product1} alt="" />
          <h3>Eatmeet food</h3>
          <p>$25.00</p>
        </div>
        <div className="product-card">
          <img src={product1} alt="" />
          <h3>Eatmeet food</h3>
          <p>$25.00</p>
        </div>
        <div className="product-card">
          <img src={product1} alt="" />
          <h3>Eatmeet food</h3>
          <p>$25.00</p>
        </div>
        <div className="product-card">
          <img src={product1} alt="" />
          <h3>Eatmeet food</h3>
          <p>$25.00</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
