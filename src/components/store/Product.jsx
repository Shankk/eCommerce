import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown , ValueInput } from './Utility';
import 'src/components/style/Product.css'

function PreviewCard({category,title, price, image}) {
    
    return (
        <Link className="preview" to={"/shop/" + category + "/" + title}>
            <div className="preview-image">
                <img src={image} alt="product image" />
            </div>
            <div className="preview-info">
                <p className='price'>${price}</p>
                <p className='title'>{title}</p>
            </div>
        </Link>
    );
}

PreviewCard.propTypes = {
    category: PropTypes.string,
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

function ProductCard({category, title, price, description, image, addToCart}) {
    const [size, setSize] = useState()
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate();
    const amount = [
        {label:"1", value:1},
        {label:"2", value:2},
        {label:"3", value:3},
        {label:"4", value:4},
        {label:"5", value:5}
    ]
    const assignSize = (value) => {
        setSize(value)
    }
    const BuyProductNow = () => {
        addToCart(quantity)
        navigate("/cart")
    }
    return (
        <div className="product">
            <div className="product-image">
                <img src={image} alt="product image" />
            </div>
            <div className="product-info">
                <div className='desc'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>${price}</p>
                </div>
                <hr />
                <div className='options'>
                    {category != "electronics" ? (
                        <>
                            <p className='p-title'>Size:{size}</p>
                            <div>
                                <button className='p-button' onClick={() => assignSize("XS")}>XS</button>
                                <button className='p-button' onClick={() => assignSize("S")}>S</button>
                                <button className='p-button' onClick={() => assignSize("M")}>M</button>
                                <button className='p-button' onClick={() => assignSize("L")}>L</button>
                                <button className='p-button' onClick={() => assignSize("XL")}>XL</button>
                            </div>
                            <hr />
                        </>
                    ) : (
                        <></>
                    )}
                    <Dropdown label={'Quantity'} options={amount} value={quantity.toString()} onChange={(event) => setQuantity(event.target.value)}></Dropdown>
                </div>
                <hr />
                <button className='product-button' id='buy' onClick={() => BuyProductNow()}>Buy Now <div></div></button>
                <button className='product-button' id='add' onClick={() => addToCart(quantity)}>Add to Cart <div></div></button>
            </div>
        
        </div>
    );
}
  
ProductCard.propTypes = {
    category: PropTypes.string,
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

function CartCard({title, price, image, quantity, update, remove}) {
    

    return (
        <div className="cart-product">
            <div className="cart-product-image">
                <img src={image} alt="product image" />
            </div>
            <div className="cart-product-info">
                <div className='left'>
                    <p>{title}</p>
                </div>
                <div className='right'>
                    <p>${(quantity*price)}</p>
                    <p>{quantity}x ${price}</p>
                    <ValueInput value={quantity} setValue={update} min={1} max={10}></ValueInput>
                    <button onClick={remove}>Remove</button>
                </div>
            </div>
        </div>
    );
}
  
CartCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    children: PropTypes.node,
    update: PropTypes.func,
    remove: PropTypes.func
}

CartCard.defaultProps = {
    title: 'Leather Backpack',
    price: 69.99,
    description: 'A Leather Backpack to Store all your valuables',
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

export {ProductCard, PreviewCard, CartCard};