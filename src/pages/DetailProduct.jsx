import React from "react";
import { useParams } from "react-router-dom";
import ProducThumnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";
function DetailProduct() {
  let { productId } = useParams();
// console.log(params)
  const {product, loading} = useProductDetail(productId)
    return (
      <div className="detail">
        <div className="container">
          <div className="detail-content">
            <div className="detail-thumb">
<ProducThumnail />
            </div>
            <div className="detail-info">
              <h3>
                Pet natural lysine <span>25.00</span>
              </h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default DetailProduct