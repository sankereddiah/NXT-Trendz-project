import {Link, withRouter} from 'react-router-dom'
import './index.css'

const SimilarProductItem = props => {
  const {productDetails, func} = props
  const {id, title, brand, imageUrl, rating, price} = productDetails

  const changeRoute = () => {
    func(productDetails)
  }
  return (
    <li className="similar-product-item" onClick={changeRoute}>
      <Link to={`/products/${id}`}>
        <img
          src={imageUrl}
          className="similar-product-img"
          alt={`similar product ${title}`}
        />
      </Link>
      <div>
        <p className="similar-product-title" onClick={changeRoute}>
          {title}
        </p>
      </div>

      <p className="similar-products-brand">by {brand}</p>
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </li>
  )
}

export default withRouter(SimilarProductItem)
