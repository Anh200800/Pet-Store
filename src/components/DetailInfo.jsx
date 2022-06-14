import React from "react";

const DetailInfo = ({product}) => {
    return (
        <div>
<h1>{product.title}</h1>
<p>${product.price}</p>
<p>{product.desc}</p>
        </div>
        
        
    )
}
export default DetailInfo;
