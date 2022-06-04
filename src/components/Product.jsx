import React from "react";
import { useNavigate } from 'react-router-dom';



const Product = ({product}) => {

    const history = useNavigate();
const handleClick = () => {
history(`/product/${product.id}` )
}
return (
  <div className="product" onClick={handleClick}>
    <div className="product-list">
      <div className="product-card">
  

        <img src={product.img} alt="" />
        <h3>{product.title}</h3>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </div>
    </div>
  </div>
);
}


export default Product;
