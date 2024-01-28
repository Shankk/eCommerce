import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Default from "./Default";
import Shop from "./Shop";
import Cart from "./Cart";
import 'src/components/style/Homepage.css'


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

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = () => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 10 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    if(productList.length == 0) {
        FetchStoreProducts()
    }

    return (
        <div className="page">
            <div className="header-section">
                <div className="site-title">
                    <div id="logo">
                        <img src="/rose.png" alt="" />
                    </div>
                    <Link id="home-button" to="/home">Black Rose</Link>
                </div>
                <nav> 
                    <Link className="nav-header" to="/shop/all">ALL</Link>
                    <Link className="nav-header" to="/shop/men's clothing">MEN</Link>
                    <Link className="nav-header" to="/shop/women's clothing">WOMEN</Link>
                    <Link className="nav-header" to="/shop/jewelery">JEWELERY</Link>
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
                <div className="top">
                    <div className="subscribe">
                        <h3>SEE THE LATEST FIRST</h3>
                        <input type="email" id="email" placeholder="Enter your email address" size={30} required />
                        <button>JOIN</button>
                        <p>Yes! I would like to receive style news and exclusive offers from Black Rose Inc.
                            You can withdraw consent at any time. FOR MORE DETAILS SEE OUR PRIVACY POLICY OR CONTACT US.</p>
                        <div className="socials">
                            <Link><img src="facebook.svg" alt="Facebook"/></Link>
                            <Link><img src="twitter.svg" alt="Twitter" /></Link>
                            <Link><img src="instagram.svg" alt="Instagram" /></Link>
                            <Link><img src="youtube.svg" alt="Youtube" /></Link>
                        </div>
                    </div>
                    <div className="customer">
                        <h3>HOW CAN WE HELP?</h3>
                        <Link className="nav-footer" >Contact Us</Link>
                        <Link className="nav-footer" >Shipping</Link>
                        <Link className="nav-footer" >Returns and Exchanges</Link>
                        <Link className="nav-footer" >Warranty</Link>
                        <Link className="nav-footer" >FAQs</Link>
                    </div>
                    <div className="about">
                        <h3>MORE</h3>
                        <Link className="nav-footer" >Store Locator</Link>
                        <Link className="nav-footer" >Our History</Link>
                        <Link className="nav-footer" >Careers</Link>
                        <Link className="nav-footer" >Gift Cards</Link>
                        
                        
                    </div>
                    <img src="/BlackRose-white.jpg" alt="" />
                </div>
                <hr />
                <div className="bottom">
                    <p>Copyright 2024 Black Rose Inc.</p>
                    <div className="vl"></div>
                    <Link className="nav-footer">Privacy Policy</Link>
                    <div className="vl"></div>
                    <Link className="nav-footer">Terms & Conditions</Link>
                    <div className="vl"></div>
                    <p>Created by Brian Viveiros</p>
                </div>
                    
            </div>
        </div>
    );
}

export default Homepage;