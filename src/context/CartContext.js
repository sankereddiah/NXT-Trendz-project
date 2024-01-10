import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  count: 0,
  updateCount: () => {},
  updateCartItem: () => {},
  updecreaseCount: () => {},
})

export default CartContext
