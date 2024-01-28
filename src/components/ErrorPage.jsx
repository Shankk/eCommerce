import { Link } from "react-router-dom";

const ErrorPage = () => {
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
            <Link className="navItem" to="/shop/electronics">ELECTRONICS</Link>
        </nav>
        <Link className="navItem" to="/cart">CART</Link>
    </div>
    <div className="content">
      <div className="error">
        <h1>Oh no, this route does not exist!</h1>
            <Link to="/">
              You can go back to the home page by clicking here, though!
            </Link>
      </div>
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
};

export default ErrorPage;