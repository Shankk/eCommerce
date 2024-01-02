/* eslint-disable react/prop-types */
import { useState } from 'react';
import {CartCard} from './Product';

const Cart = ({cartList, setCartList}) => {
  const [totalCost, setTotalCost] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [didWeOpenCart, setOpenCart] = useState(true)

  const UpdateQuantity = (item, quantity) => {
    let newList = cartList
    const index = newList.indexOf(item)
    if(index > -1) {newList[index].quantity = quantity}
    setCartList(newList)
    AssignTotal(CalculateTotal())
  }

  const RemoveFromCart = (item) => {
    let newList = cartList
    const index = newList.indexOf(item)
    if(index > -1) {newList.splice(index,1)}
    setCartList(newList)
    AssignTotal(CalculateTotal())
  }

  const CalculateTotal = () => {
    let total = {cost:0 , quantity:0}
    if(cartList.length > 0 ) {
      cartList.map((item) =>{
        total.cost += (item.price * item.quantity)
        total.quantity += parseInt(item.quantity)
      })
      total.cost = Math.round((total.cost + Number.EPSILON) * 100) / 100
    }
    return total
  }

  const AssignTotal = (total) => {
    if(total.cost != totalCost || total.quantity != totalQuantity) {
      setTotalCost(total.cost)
      setTotalQuantity(total.quantity)
    }
  }
  
  if(didWeOpenCart) {
    AssignTotal(CalculateTotal())
    setOpenCart(false)
  }

  return (
    <div className='cart'>
      <div>
        <p>Your Shopping Cart...</p>
        {cartList.length > 0 && cartList.map((item,i) =>{
          return <CartCard key={i} title={item.title} price={item.price} description={item.description}
            image={item.image} itemRef={item} remove={() => RemoveFromCart(item)}>
              <span>Quantity<input type="number" min={1} max={10} value={item.quantity} onChange={(event) => UpdateQuantity(item,event.target.value)}/></span>
          </CartCard>
        })}
      </div>
      <div>
        <p>Subtotal ({totalQuantity} items): ${totalCost}</p>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};
  
export default Cart;