import React from 'react'
import QuantityField from './form-controls/QuantityField';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItemTotal
} from "../features/Cart/selectors";
import { removeFromCart } from "../features/Cart/CartSlice";




function CartItem({ product }) {
    const schema = yup.object().shape({
      quantity: yup
        .number()
        .min(1, "Minimum value is 1")
        .required("Please enter quantity")
        .typeError("please enter a number"),
    });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const ItemTotal = useSelector(cartItemTotal);
const dispatch = useDispatch();
const handleRemoveItem = () => {
  const action = removeFromCart({
    id: product.id,
  });
  dispatch(action);
};
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
            <QuantityField value={product.quantity} name="quantity"  form={form} />
            <h5>{ ItemTotal}</h5>
            <a href="" onClick={handleRemoveItem}>X</a>
          </div>
        </div>
      </div>
      <div className="cart-line"></div>
    </div>
  );
}

export default CartItem;