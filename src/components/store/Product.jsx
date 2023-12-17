import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function PreviewCard({title, price, description, image}) {
    
    return (
        <Link className="preview" to={"/shop/" + title}>
            <img src={image} alt="product image" />
            <div className="product-info">
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </Link>
    );
}

PreviewCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string
}

PreviewCard.defaultProps = {
    title: 'Leather Backpack',
    price: 69.99,
    description: 'A Leather Backpack to Store all your valuables',
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

function ProductCard({title, price, description, image , addToCart}) {
    
    return (
        <div className="product">
            <img src={image} alt="product image" />
            <div className="product-info">
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}
  
ProductCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    addToCart: PropTypes.func
}

ProductCard.defaultProps = {
    title: 'Leather Backpack',
    price: 69.99,
    description: 'A Leather Backpack to Store all your valuables',
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

export {ProductCard, PreviewCard};