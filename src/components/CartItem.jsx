import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../features/Cart/CartSlice";

function CartItem({ product }) {
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
      quantity: product.quantity,
    });
    dispatch(action);
  };
  const handleIncreaseQuantity = () => {
    const action = increaseQuantity({
      id: product.id,
      quantity: product.quantity,
    });
    dispatch(action);
  };
  return (
    <div className="container">
      <div className="item">
        <div className="item-list">
          <div className="item-left">
            <img className="item-img" src={product.product.img} alt="" />

            <h3>{product.product.title}</h3>
          </div>
          <div className="item-right">
            <h3 className="item-price">${product.product.price}</h3>
            <div>
              <span
                className="item-btn"
                onClick={() => handleDecreaseQuantity()}
              >
                -
              </span>
              <span className="item-quantity">{product.quantity}</span>
              <span
                className="item-btn"
                onClick={() => handleIncreaseQuantity()}
              >
                +
              </span>
            </div>
            <h3 className="item-total">
              ${product.product.price * product.quantity}
            </h3>
            <h3 className="item-remove" onClick={() => handleRemoveItem()}>
              X
            </h3>
          </div>
        </div>
      </div>
      <div className="cart-line"></div>
    </div>
  );
}

export default CartItem;
