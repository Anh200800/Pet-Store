import React from "react";
import Banner from "../components/Banner"
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
function Shop() {
  return (
    <div className="shop">
      <Header />
      <Banner />
      <div className="container">

      <div className="shop-grid">
        <div className="shop-navbar">
        <NavBar />
        </div>
        <div className="shop-product">
        <Product />
        </div>

        </div>
      </div>
      </div>
  );
}

export default Shop;
