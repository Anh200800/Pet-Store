import React from 'react'
import PropTypes from 'prop-types'

function Cart() {
  return (
      <div className="cart">
          <div className="container">
              <div className="cart-box">
                  <div className="cart-title">
                      <ul>
                          <li>Item</li>
                          <li>Price</li>
                          <li>Quantity</li>
                          <li>Total</li>
                          <li>Remove</li>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}

Cart.propTypes = {}

export default Cart
