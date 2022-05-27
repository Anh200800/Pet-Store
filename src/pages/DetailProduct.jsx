import React from "react";
import { useParams } from "react-router-dom";
import DetailThumnail from "../components/DetailThumbnail";
import DetailInfo from "../components/DetailInfo";
import AddToCartForm from "../components/AddToCartForm";
import useProductDetail from "../hooks/useProductDetail";
function DetailProduct() {
  let { productId } = useParams();
// console.log(params)
  const {product, loading} = useProductDetail(productId)
  if (loading) {
    return <h2>Loading</h2>
  }
  const handleAđdToCartSubmit = (formValues) => {
    console.log('Form submit: ', formValues)
  }
    return (
      <div className="detail">
        <div className="container">
          <div className="detail-content">
            <div className="detail-thumb">
           <DetailThumnail product={product} />
            </div>
            <div className="detail-info">
           <DetailInfo product={product} />
           <AddToCartForm onSubmit={handleAđdToCartSubmit}/>
            </div>
          </div>
        </div>
      </div>
    );
}
export default DetailProduct