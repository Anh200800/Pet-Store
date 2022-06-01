import React from 'react'
import QuantityField from './form-controls/QuantityField';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItemTotal
} from "../features/Cart/selectors";
import { removeFromCart, decreaseQuantity, increaseQuantity } from "../features/Cart/CartSlice";




function CartItem({ product }) {
   
  const ItemTotal = useSelector(cartItemTotal);
const dispatch = useDispatch();
const handleRemoveItem = () => {

  const action = removeFromCart({
    id: product.id,
  });
  dispatch(action);
};
const handleDecreaseQuantity = () => {
   const action = decreaseQuantity({
      id: product.id,
      quantity: product.quantity
    });
    dispatch(action)
}
const handleIncreaseQuantity = () => {
   const action = increaseQuantity({
      id: product.id,
      quantity: product.quantity
    });
    dispatch(action)
}
  return (
    <div className="container">
      <div className="item">
        <div className="item-list">
          <div className="item-left">
            <img className="item-img" src={product.product.img} alt="" />

            <h5>{product.product.title}</h5>
          </div>
          <div className="item-right">
            <h5>{product.product.price}</h5>
            <div>
              <span className="item-btn" onClick={() => handleDecreaseQuantity()}>-</span>
              <span className="item-quantity">{product.quantity}</span>
              <span className="item-btn" onClick={() => handleIncreaseQuantity()}>+</span>
            </div>
            <h5>{ ItemTotal}</h5>
            <h3 onClick={()=>handleRemoveItem()}>X</h3>
          </div>
        </div>
      </div>
      <div className="cart-line"></div>
    </div>
  );
}

export default CartItem;