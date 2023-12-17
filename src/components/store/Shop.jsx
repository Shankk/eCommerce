/* eslint-disable react/prop-types */
import {PreviewCard, ProductCard} from "./Product";

function Shop({cartList: productList, product}) {
  let foundProduct = {}
  const SearchForProduct = () => {
    let obj = productList.find(item => item.title === product)
    if(product != null){
      if(obj) {
      console.log("Success Item Found")
      console.log(obj)
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

  const AddProductToCart = () => {
    console.log(productList)
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
          {productList.length > 0 && productList.map((item,i) =>{
            return <PreviewCard key={i} title={item.title} price={item.price} description={item.description} image={item.image}></PreviewCard>
          })}
        </div>
      )}
    </div>

  )
}
  
export default Shop;