import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import './index.css'

class CheckOut extends Component {
  state = {fName: '', lName: '', mNum: '', state: 'false'}

  createItem = item => {
    const {title, brand, quantity, price, imageUrl} = item
    return (
      <div className="cart-item">
        <img src={imageUrl} className="image" alt="product" />
        <div>
          <p className="para">{title}</p>
          <p className="para">{brand}</p>
          <p className="para">QTY {quantity}</p>
          <p className="para">{quantity * price}/-</p>
        </div>
      </div>
    )
  }

  place = () => {
    const {fName, lName, mNum} = this.state
    if (fName === '' || lName === '' || mNum === '') {
      this.setState({state: 'true'})
    } else {
      const {history} = this.props

      history.replace('/success')
    }
  }

  upfName = event => {
    this.setState({fName: event.target.value})
  }

  uplName = event => {
    this.setState({lName: event.target.value})
  }

  upmNum = event => {
    this.setState({mNum: event.target.value})
  }

  render() {
    const {fName, lName, mNum, state} = this.state
    return (
      <>
        <Header />
        <div className="container">
          <form className="details">
            <h1 className="heading">Shipping Address</h1>
            <div className="name">
              <input
                type="text"
                placeholder="First Name*"
                className="input"
                onChange={this.upfName}
                value={fName}
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="input"
                onChange={this.uplName}
                value={lName}
              />
            </div>
            <input type="text" placeholder="Email" className="input single" />
            <input
              type="text"
              placeholder="Mobile Number*"
              className="input"
              onChange={this.upmNum}
              value={mNum}
            />
            <input
              type="text"
              placeholder="House no./Building no."
              className="input single"
            />

            <input
              type="text"
              placeholder="Street Address"
              className="input single"
            />
            <div>
              <input type="text" placeholder="Country" className="input" />
              <input type="text" placeholder="State" className="input" />
            </div>
            <div>
              <input type="text" placeholder="City" className="input" />
              <input type="text" placeholder="Postal Code" className="input" />
            </div>
            {state === 'true' && (
              <p className="error-message">Please Enter Your Details</p>
            )}
            <button className="checkout" type="button" onClick={this.place}>
              Check Out
            </button>
          </form>
          <div className="summary-check">
            <CartContext.Consumer>
              {value => {
                const {cartList, count} = value
                return (
                  <>
                    <div className="order-summary">
                      <h1 className="summary-heading">Order Summary</h1>
                      <div className="item-no">
                        <p className="para">Items</p>
                        <p className="total-count">{cartList.length}</p>
                      </div>
                      <div className="item-no">
                        <p className="total">Total</p>
                        <p className="amount">RS {count} /-</p>
                      </div>
                    </div>
                    <div className="list">
                      <h1 className="summary-heading">Order Details</h1>
                      {cartList.map(each => this.createItem(each))}
                    </div>
                  </>
                )
              }}
            </CartContext.Consumer>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(CheckOut)
