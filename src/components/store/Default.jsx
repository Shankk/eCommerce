/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PreviewCard } from "./Product";
import { useRef, useState } from "react";

const item_width = 600;

function Default({productList}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;

        if(newScrollPosition < 0) {setScrollPosition(0)}
        else if(newScrollPosition > containerRef.current.scrollWidth) {setScrollPosition(containerRef.current.scrollLeft)}
        else {setScrollPosition(newScrollPosition);}
        containerRef.current.scrollLeft = newScrollPosition;
    }

    function GrabItemsInCategory(category) {
        return productList.length > 0 && productList.map((item,i) =>{
            //If caterogry is found. return products.
            if(item.category == category) {
                return <PreviewCard key={i} category={item.category} title={item.title} price={item.price} description={item.description} image={item.image}></PreviewCard>
            }
        })
    }
    function GrabAllProducts() {
        return productList.length > 0 && productList.map((item,i) =>{
            return <PreviewCard key={i} category={item.category} title={item.title} price={item.price} description={item.description} image={item.image}></PreviewCard>
        })
    }

    return (
        <>
            <div className="category-container">
                <div className="product-line-header">
                    <Link className="nav-product-button" to="/shop/all">BESTSELLERS</Link>
                    <div></div>
                </div>
                <div className="product-line" ref={containerRef}>
                    {GrabAllProducts()}
                    <button className="scroll-left" onClick={()=>handleScroll(-item_width)}>{"<"}</button>
                    <button className="scroll-right" onClick={()=>handleScroll(item_width)}>{">"}</button>
                </div>
            </div>

            <div className="category-container">
                <div className="product-line-header">
                    <Link className="nav-product-button" to="/shop/men's clothing">MEN</Link>
                    <div></div>
                </div>
                <div className="product-line">
                    {GrabItemsInCategory("men's clothing")}
                </div>
            </div>
            
            <div className="category-container">
                <div className="product-line-header">
                    <Link className="nav-product-button" to="/shop/women's clothing">WOMEN</Link>
                    <div></div>
                </div>
                <div className="product-line">
                    {GrabItemsInCategory("women's clothing")}
                </div>
                
            </div>
            
            <div className="category-container">
                <div className="product-line-header">
                    <Link className="nav-product-button" to="/shop/jewelery">JEWELERY</Link>
                    <div></div>
                </div>      
                <div className="product-line">
                    {GrabItemsInCategory("jewelery")}
                </div>
                
            </div>
            
            {/* <div className="category-container">
                <Link className="navItem" to="/shop/electronics">ELECTRONICS</Link>
                <div className="product-line">
                    {GrabItemsInCategory("electronics")}
                </div>
            </div> */}
        </>
    )

}

export default Default;