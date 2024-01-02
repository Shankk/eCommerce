import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Default from "./store/Default";
import Shop from "./store/Shop";
import Cart from "./store/Cart";
import './Homepage.css'
import { useState } from "react";

function Homepage() {
    const { name } = useParams();
    const { product } = useParams();
    const testItemTwo = {title: 'Leather Backpack', price: 69.99, quantity:1,
    description: 'A Leather Backpack to Store all your valuables',
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
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
                    const element = {title:response[index].title, price: response[index].price, quantity:1,
                    description:response[index].description, image:response[index].image};
                    array.push(element)
                }
                setProductList(array)
            })
    }

    if(productList.length == 0) {
        FetchStoreProducts()
    }

    //console.log("Reload")
    return (
        <div>
            <div className="header">
                <h1 className="siteTitle">Street <br /> Smarts</h1>
                <nav>
                    <Link className="navItem" to="/home">HOME</Link>
                    <Link className="navItem" to="/shop">SHOP</Link>
                    <Link className="navItem" to="/cart">CART</Link>
                </nav>
                
            </div>
            <h1>Hello from the Shop page!</h1>
                <hr />
                <h2>The Shop visited is here:</h2>
                {name === "shop" ? (
                    <Shop cartList={cartList} setCartList={setCartList} productList={productList} product={product}/>
                ) : name === "cart" ? (
                    <Cart cartList={cartList} setCartList={setCartList} />
                ) : (
                    <Default />
                )}
        </div>
    );
}
    
export default Homepage;