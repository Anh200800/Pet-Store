import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import TotalCart from '../components/TotalCart'
function Cart() {
    const cartItems = useSelector(state => state.cart)
    const cart = cartItems.cartItems
    console.log('check cart: ', cart)
    
    return (
        <>
          <div className="container">
        <div className="cart">
              <div className="cart-list">
                      <div className='cart-left'>
                      <h3>Item</h3>
                      </div>
                  <div className='cart-right'>
                      <h3>Price</h3>
                      <h3>Quantity</h3>
                      <h3>Total</h3>
                      <h3>Remove</h3>

                  </div>

                  </div>
                  <div className='cart-line'></div>
              </div>
        </div>
        <div>

            {cart.map((product) => {
                return (
                   <CartItem product={product} />
                )
            })}
            </div>
           <TotalCart />
            
    
        </>
    )
}

Cart.propTypes = {}

export default Cart
