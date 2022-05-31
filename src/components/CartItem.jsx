import React from 'react'
import Product from './Product';

function CartItem({product}) {
  return (
    <div className='cart-item'>
      <img src={product.product.img} alt="" />
      <h3>{Product.Product.title}</h3>
    </div>
  )
}

export default CartItem;