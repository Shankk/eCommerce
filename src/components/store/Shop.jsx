/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {PreviewCard, ProductCard} from "./Product";
import { Dropdown } from "./Utility";
import { useState } from "react";

function Shop({cartList, setCartList, productList, product, category}) {
  let foundProduct = {}
  const navigate = useNavigate();
  const [searchVal, setSearch] = useState("")
  const [filterVal, setFilter] = useState("")
  const [categoryVal, setCategory] = useState(category)
  const handleSearch = (event) => {setSearch(event.target.value)}
  const handleFilter = (event) => {setFilter(event.target.value)}
  const handleCategory = (event) => {navigate("/shop/" + event.target.value)}
  
  const options = [
    {label:"N/A", value:""},
    {label:"High-Low", value:"high"},
    {label:"Low-High", value:"low"},
    {label:"A-Z", value:"ascending"},
    {label:"Z-A", value:"descending"}
  ]
  const categorys = [
    {label:"N/A", value:"all"},
    {label:"Mens", value:"men's clothing"},
    {label:"Womens", value:"women's clothing"},
    {label:"Jewelery", value:"jewelery"},
    /* {label:"Electronics", value:"electronics"} */
  ]

  function PreviewItem(i,category,title,price,description,image) {
    return <PreviewCard key={i} category={category} title={title} price={price} description={description} image={image}></PreviewCard>
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
      let tempTitle = item.title.toLocaleLowerCase('en-US')

      //If caterogry is not empty and search val is not empty
      if(categoryVal != "all") {
        //push all category items in list
        if(tempTitle.includes(searchVal.toLocaleLowerCase('en-US')) && item.category.startsWith(categoryVal.toLocaleLowerCase('en-US'))) {
          return PreviewItem(i,item.category,item.title,item.price,item.description,item.image)
        }
      }
      else if(searchVal != ""){
        let tempTitle = item.title.toLocaleLowerCase('en-US')
        return tempTitle.includes(searchVal.toLocaleLowerCase('en-US')) && PreviewItem(i,item.category,item.title,item.price,item.description,item.image)
      }
      else return PreviewItem(i,item.category,item.title,item.price,item.description,item.image)
    }) 

  }

  //Trigger Category changes.
  if(categoryVal != category){
    setCategory(category)
  }

  return (
    <>
      {SearchForProduct()  ? (
        
        <ProductCard category={foundProduct.category} title={foundProduct.title} price={foundProduct.price}
        description={foundProduct.description} image={foundProduct.image} 
        addToCart={AddProductToCart}></ProductCard>
        
      ) : (
        
        //Default Shop
        
        <div className="shop">
          <div className="searchSection">
            <input className="search" type="text" placeholder="Search Product..." value={searchVal} onChange={handleSearch}/>
            <div className="filters">
              <Dropdown label={"Filter"} options={options} value={filterVal} onChange={handleFilter}></Dropdown>
              <Dropdown label={"Category"} options={categorys} value={categoryVal} onChange={handleCategory}></Dropdown>
            </div>
          </div>
          <div className="layout">
            {ShowProductList()}
          </div>
        </div>
      )}
    </>

  )
}
  
export default Shop;