import React from "react";
import { useNavigate } from 'react-router-dom';

// import icon1 from "../assets/images/icon-product1.png"
// import icon2 from "../assets/images/icon-product2.png"

const Product = ({product}) => {

    const history = useNavigate();
const handleClick = () => {
history(`/product/${product.id}` )
}
return (
  
  <div className="product" onClick={handleClick}>
      <div className="product-list"  >
              <div className="product-card">
                 {/* <img src={icon1} alt="" />
                <img src={icon2} alt="" />  */}

                <img src={product.img} alt="" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
              
       </div>
    
       </div>
  );
}


export default Product;
