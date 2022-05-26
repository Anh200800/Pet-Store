import React from "react";
import ProducThumnail from "../components/ProductThumbnail";
function DetailProduct() {
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