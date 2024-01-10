import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {GiConfirmed} from 'react-icons/gi'
import Header from '../Header'
import './index.css'
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line no-unused-vars
import Firework from './fireworks'

const Success = () => {
  useEffect(() => {
    Firework()
  }, [])

  return (
    <>
      <Header />
      <div className="success-page">
        <div className="success">
          <div className="success-page">
            <p className="suc">Congratulations</p>
            <GiConfirmed className="icon" />
          </div>

          <h2 className="success-heading">Thank You For Your Purchase</h2>
          <p className="su-para">Check your email for your receipt</p>
          <p>
            If you have any questions please email
            <a href="mailto:nxttrendz@gmail.com" className="mail">
              nxttrendz@gmail.com
            </a>
          </p>
          <Link to="/products">
            {' '}
            <button className="continue" type="button" onClick="go_to">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Success
