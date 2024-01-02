import PropTypes from 'prop-types'
import { useState } from 'react';
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
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="product">
            <img src={image} alt="product image" />
            <div className="product-info">
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
                <span>Quantity<input type="number" placeholder='1' min={1} max={10} value={quantity}
                onChange={(event) => setQuantity(event.target.value)}/></span>
                <button onClick={() => addToCart(quantity)}>Add to Cart</button>
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

function CartCard({title, price, description, image, children, remove}) {

    return (
        <div className="product">
            <img src={image} alt="product image" />
            <div className="product-info">
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
                {children}
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    );
}
  
CartCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    children: PropTypes.node,
    remove: PropTypes.func
}

CartCard.defaultProps = {
    title: 'Leather Backpack',
    price: 69.99,
    description: 'A Leather Backpack to Store all your valuables',
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

export {ProductCard, PreviewCard, CartCard};