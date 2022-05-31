import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailThumnail from "../components/DetailThumbnail";
import DetailInfo from "../components/DetailInfo";
import AddToCartForm from "../components/AddToCartForm";
import useProductDetail from "../hooks/useProductDetail";
import {addToCart} from '../features/Cart/CartSlice'
function DetailProduct() {
  let { productId } = useParams();
  const { product, loading } = useProductDetail(productId)
  const dispatch = useDispatch()
  if (loading) {
    return <h2>Loading</h2>
  }
  const handleAđdToCartSubmit = (formValues) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: formValues.quantity
    });
    console.log('check action: ',action)
    dispatch(action)
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