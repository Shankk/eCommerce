import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Default from "./store/Default";
import Shirt from "./store/Shirt";
import Cart from "./store/Cart";
import './Homepage.css'

function Homepage() {
    const { name } = useParams();

    return (
        <div>
            <div className="header">
                <h1 className="siteTitle">Street <br /> Smarts</h1>
                <nav>
                    <Link className="navItem" to="/home">HOME</Link>
                    <Link className="navItem" to="/shirt">SHIRT</Link>
                    <Link className="navItem" to="/cart">CART</Link>
                </nav>
                
            </div>
            <h1>Hello from the Shop page!</h1>
                <p>So, how are you?</p>
                <hr />
                <h2>The Shop visited is here:</h2>
                {name === "shirt" ? (
                    <Shirt />
                ) : name === "cart" ? (
                    <Cart />
                ) : (
                    <Default />
                )}
        </div>
    );
}
    
export default Homepage;