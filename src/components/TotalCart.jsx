import React from 'react'
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../features/Cart/selectors'
function TotalCart() {
    const cartTotal = useSelector(cartTotalSelector);
    
  return (
    <div className="container">
      <div className="total">
        <div className="total-list">
          <div className="total-coupon">
          </div>
          <div className="total-cart">
            <div>
              <h3>Subtotal</h3>
              <h3>Shipping cost</h3>
              <h3>Total</h3>
            </div>
            <div>
              <h3>{cartTotal} USD</h3>
              <h3>$0.00 USD</h3>
              <h3>{cartTotal} USD</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalCart