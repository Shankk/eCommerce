/* eslint-disable react/prop-types */
import { useState } from 'react';
import {CartCard} from './Product';
import 'src/components/style/Cart.css'

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
      <div className='items'>
        <h3>Your Cart</h3>
        {cartList.length > 0 && cartList.map((item,i) =>{
          return (
            <>
              <CartCard key={i} title={item.title} price={item.price} image={item.image} amount={item.quantity}
              update={(quantity) => UpdateQuantity(item,quantity)} remove={() => RemoveFromCart(item)}>   
              </CartCard>
              <hr />
            </>
          )
        })}
      </div>
      <div className='checkout'>
        <div>
          <h2>Order Summary</h2>
          <p>$CAD</p>
        </div>
        <div>
          <p>Subtotal</p>
          <p>({totalQuantity} items): ${totalCost}</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div>
          <p>Estimated Sales Tax</p>
          <p>TBD</p>
        </div>
        <hr />
        <div>
          <p>Your Estimated Total</p>
          <p>${totalCost}</p>
        </div>
        <hr />
        <button>Proceed to Checkout<div></div></button>
      </div>
    </div>
  );
};
  
export default Cart;