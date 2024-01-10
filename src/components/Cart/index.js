import {Link} from 'react-router-dom'
import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems, count} = value
      const showEmptyView = cartList.length === 0

      // TODO: Update the functionality to remove all the items in the cart
      const onRemoveAll = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <p className="remove-para" onClick={onRemoveAll}>
                  Remove All
                </p>
                <CartListView />
                <div className="summary">
                  <h1 className="cart-prize">
                    Order total:<span className="prize"> RS {count}</span>/-
                  </h1>
                  <p className="cart-count">{cartList.length} items in cart</p>
                  <Link to="/checkOut">
                    <button type="button" className="check-out">
                      Check Out
                    </button>
                  </Link>
                </div>
                {/* TODO: Add your code for Cart Summary here */}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
