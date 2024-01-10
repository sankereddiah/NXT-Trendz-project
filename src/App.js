import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import CheckOut from './components/checkOut'
import Success from './components/success'
import './App.css'

class App extends Component {
  state = {
    cartList: [],
    count: 0,
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  addCartItem = product => {
    const {cartList} = this.state
    const {id} = product
    let state = true
    cartList.forEach(each => {
      if (each.id === id) {
        state = false
        this.incrementCartItemQuantity(id)
      }
    })
    if (state) {
      this.setState(prevState => ({
        cartList: [...prevState.cartList, product],
      }))
    }

    //   TODO: Update the code here to implement addCartItem
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const modData = cartList.filter(each => each.id !== id)
    this.setState({cartList: modData})
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  updateCount = value => {
    this.setState(prevState => ({count: prevState.count + value}))
  }

  updecreaseCount = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  incrementCartItemQuantity = value => {
    const {cartList} = this.state
    const upData = cartList.map(each => {
      if (each.id === value) {
        return {
          availability: each.availability,
          brand: each.brand,
          description: each.description,
          id: each.id,
          imageUrl: each.imageUrl,
          price: each.price,
          rating: each.rating,
          title: each.title,
          totalReviews: each.totalReviews,
          quantity: each.quantity + 1,
        }
      }
      return each
    })
    this.setState({cartList: upData})
  }

  decrementCartItemQuantity = value => {
    const {cartList} = this.state
    const upData = cartList.map(each => {
      if (each.id === value) {
        return {
          availability: each.availability,
          brand: each.brand,
          description: each.description,
          id: each.id,
          imageUrl: each.imageUrl,
          price: each.price,
          rating: each.rating,
          title: each.title,
          totalReviews: each.totalReviews,
          quantity: each.quantity - 1,
        }
      }
      return each
    })
    this.setState({cartList: upData})
  }

  render() {
    const {cartList, count} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          count,
          updateCount: this.updateCount,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          updecreaseCount: this.updecreaseCount,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkOut" component={CheckOut} />
          <ProtectedRoute exact path="/success" component={Success} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
