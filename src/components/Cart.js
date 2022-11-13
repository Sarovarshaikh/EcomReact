import React, {useContext} from 'react';
import { CartContext } from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const Cart = (props) => {
    const {shoppingCart,totalPrice, qty, dispatch} = useContext(CartContext);
    const handleToken  = async(token) =>{
      const product = {name:'All products',price: totalPrice}
      const response = await axios.post('http://localhost:8080/checkout',{
        product,
        token

      });
      const {status} = response.data;
      if(status==='success'){
        dispatch({type:'EMPTY'});
        props.history.push('/');
       
      }
    }
    
  return (
    <div className='cart-container'>
        <div className='cart-details' style={{marginTop:'100px'}}>
          {
            shoppingCart.length > 0 ?
             shoppingCart.map((cart) =>(
                <div className='cart' key={cart.id}>
                    <span className='cart-image'>
                        <img src={cart.image} alt='not found' />
                    </span>
                    <span className='cart-prodct-name'>
                       {cart.name}
                    </span>
                    <span className='cart-product-price'>
                        ${cart.price}.00
                    </span>
                    <span className='inc' onClick={() => dispatch({type:'INC',id: cart.id ,cart})}><i className="fas fa-plus"></i></span>
                    <span className='product-quanty'>{cart.qty}</span>
                    <span className='dec' onClick={() => dispatch({type:'DEC',id: cart.id ,cart})} ><i className="fas fa-minus"></i></span>
                    <span className='product-total-price'>{cart.price * cart.qty}</span>
                    <span className='delet-product' onClick={()=>dispatch({type:'DELETE',id:cart.id, cart})}> <i className='fas fa-trash-alt'></i> </span>
                </div>
             ))
              : 'sorry Your cart Empty'
          }
        </div>
        {shoppingCart.length> 0 ? <div className='cart-summary'>
            <div className='summary'>
              <h3>Cart Summary</h3>
              <div className='total-items'>
                  <div className='items'>Total Items</div>
                  <div className='item-count'> {qty} </div>
              </div>
              <div className='totoal-price-section'>
                  <div className='just-title'>Total Price</div>
                  <div className='items-price'>${totalPrice}.00 </div>
              </div>
              <div className='stripe-section'>
                  <StripeCheckout stripeKey='pk_test_51M3Iw0SE23BaaliX0WqvzskNAIFRYUAUqtOOIlEyTlK5PTLa2foLvWQnQOjHTIutE5KrtQ0loa4TfoXFob4iLyxw008taAqpWt'
                   token={handleToken}
                   billingAddress
                   shippingAddress
                   amount={totalPrice * 100}
                   name = 'All Products'
                   >

                  </StripeCheckout>
              </div>
            </div>
        </div> :"" }
    </div>
  )
}

export default Cart;
