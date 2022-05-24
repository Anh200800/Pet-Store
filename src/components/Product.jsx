import React from "react";

const Product = (props) => {
  const data = props.data
  console.log('check data: ', data)
// const array = Object.values(data);

  return (
  <>
      {data.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div className="product-list">
              <div className="product-card">
                <img src={product.img} alt="" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
