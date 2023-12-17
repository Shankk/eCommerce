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
    const testItemOne = {title:"Mens Casual Premium Slim Fit T-Shirts", price: 22.3 , 
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket',
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}
    const testItemTwo = {title: 'Leather Backpack', price: 69.99,
    description: 'A Leather Backpack to Store all your valuables',
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
    const testItemThree = {title: "Mens Cotton Jacket", price: 55.99,
        description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
    const [productList, setProductList] = useState([testItemOne, testItemTwo, testItemThree]);

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
                    <Shop cartList={productList} product={product}/>
                ) : name === "cart" ? (
                    <Cart cartList={productList} />
                ) : (
                    <Default />
                )}
        </div>
    );
}
    
export default Homepage;