import React from "react";

const DetailThumnail = ({product}) => {
    return (
        <div>
            <img src={product.img}  className="detail-img" />;
        </div>
        
        
    )
}
export default DetailThumnail;
