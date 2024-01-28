import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Default from "./store/Default";
import Shop from "./store/Shop";
import Cart from "./store/Cart";
import './Homepage.css'


function Homepage() {
    const { name } = useParams();
    const { product } = useParams();
    const { category } = useParams();
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([])
    
    function FetchStoreProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                //console.log(response)
                let array = []
                for (let index = 0; index < response.length; index++) {
                    if(response[index].category != "electronics") {
                        const element = {category:response[index].category, title:response[index].title, price: response[index].price, quantity:1,
                        description:response[index].description, image:response[index].image};
                        array.push(element)
                    }
                }
                setProductList(array)
            })
    }

    if(productList.length == 0) {
        FetchStoreProducts()
    }

    return (
        <div className="page">
            <div className="header">
                <div className="siteTitle">
                    <img className="logo" src="/rose.png" alt="" />
                    <Link to="/home">Black Rose</Link>
                </div>
                <nav> 
                    <Link className="navItem" to="/shop/all">ALL</Link>
                    <Link className="navItem" to="/shop/men's clothing">MEN</Link>
                    <Link className="navItem" to="/shop/women's clothing">WOMEN</Link>
                    <Link className="navItem" to="/shop/jewelery">JEWELERY</Link>
                    {/* <Link className="navItem" to="/shop/electronics">ELECTRONICS</Link> */}
                </nav>
                <Link className="navItem" to="/cart">CART</Link>
            </div>
            <div className="content">
                {name === "shop" ? (
                    <Shop cartList={cartList} setCartList={setCartList} productList={productList} product={product} category={category}/>
                ) : name === "cart" ? (
                    <Cart cartList={cartList} setCartList={setCartList} />
                ) : (
                    <Default productList={productList} />
                )}
            </div>
            <div className="footer">
                    <div className="subscribe">
                        <p>SEE THE LATEST FIRST</p>
                        <div>
                            <input type="text" placeholder="Enter your email address" name="" />
                            <button>JOIN</button>
                        </div>
                        <p>Yes! I would like to receive style news and exclusive offers from Black Rose Inc.
                            You can withdraw consent at any time. <br /> FOR MORE DETAILS SEE OUR PRIVACY POLICY OR CONTACT US.</p>
                    </div>
                    <div className="customer">
                        <p>CUSTOMER SUPPORT</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                    <div className="about">
                        <p>ABOUT US</p>
                        <p>Store Locator</p>
                        <p>Contact Us</p>
                    </div>
                    <img src="/BlackRose-white.jpg" alt="" />
                    
            </div>
        </div>
    );
}

export default Homepage;