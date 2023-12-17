import PropTypes from 'prop-types'
import {ProductCard, PreviewCard} from './Product';

const Cart = () => {
    return (
      <div className='cart'>
        <div>
          <p>Your Shopping Cart...</p>
          <PreviewCard></PreviewCard>
        </div>
        <div>
          <p>Subtotal (1 item): $40.00</p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    );
};
  
export default Cart;