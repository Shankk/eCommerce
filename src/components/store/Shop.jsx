/* eslint-disable react/prop-types */
import {PreviewCard, ProductCard} from "./Product";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

function Shop({cartList, setCartList, productList, product}) {
  let foundProduct = {}

  const [searchVal, setSearchVal] = useState("")
  const [filterVal, setFilterVal] = useState("high")

  const handleSearch = (event) => {
    setSearchVal(event.target.value)
  }
  const handleFilter = (event) => {
    setFilterVal(event.target.value)
  }
 
  const options = [
    {label:"High-Low", value:"high"},
    {label:"Low-High", value:"low"},
    {label:"A-Z", value:"ascending"},
    {label:"Z-A", value:"descending"}
  ]

  function SortPrice(array) {
    let temp = new Float64Array(array)
    console.log(temp)
  }

  const SearchForProduct = () => {
    let obj = productList.find(item => item.title === product || item.title === product+" ")
    if(product != null){
      if(obj) {
      //console.log("Success Item Found")
      //console.log(obj)
      foundProduct = obj
      return true
      }
      else {
        console.log("Failed. Item Not Found")
      }

      console.log(product)
    } 
    
    return false
  }

  const AddProductToCart = (quantity) => {
    let newList = cartList
    let obj = newList.find(item => item.title === foundProduct.title)
    //console.log(obj)
    if(obj != null) {
      obj.quantity += parseInt(quantity)
    }
    else {
      //console.log(quantity)
      foundProduct.quantity = quantity
      newList.push(foundProduct)
      setCartList(newList)
      //console.log(newList)
    }
  }

  const ShowProductList = () => {
    return productList.length > 0 && productList.map((item,i) =>{
      /* if(filterVal == "high") {
        
      } */
      if(searchVal != ""){
        let tempTitle = item.title.toLocaleLowerCase('en-US')
        return tempTitle.includes(searchVal.toLocaleLowerCase('en-US')) && <PreviewCard key={i} title={item.title} price={item.price} description={item.description} image={item.image}></PreviewCard>
      }
      else return <PreviewCard key={i} title={item.title} price={item.price} description={item.description} image={item.image}></PreviewCard>
    }) 
    

  }

  return (
    <div>
      
      {SearchForProduct()  ? (
        <div>
          <ProductCard title={foundProduct.title} price={foundProduct.price}
          description={foundProduct.description} image={foundProduct.image} 
          addToCart={AddProductToCart}></ProductCard>
        </div>
      ) : (
        
        //Default Shop
        
        <div className="shop">
          <div className="searchSection">
            <p>Search</p>
            <input className="search" type="text" placeholder="Search Product..." value={searchVal} onChange={handleSearch}/>
            <div>
              <Dropdown label={"Filter"} options={options} value={filterVal} onChange={handleFilter}></Dropdown>
            </div>
          </div>
          <div className="layout">
            {ShowProductList()}
          </div>
        </div>
      )}
    </div>

  )
}
  
export default Shop;