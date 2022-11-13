import React, {useContext} from 'react'
import { ProductContext } from '../Global/ProductContext';
import Banner from './Banner';
import {CartContext} from '../Global/CartContext';
const Products = () => {
    const {products} = useContext(ProductContext);
    const {dispatch} = useContext(CartContext);

    // console.log("variable data",dispatch);
  return (
    <div className="container">
        <Banner/>
    <div className='products'>
        {products.map((product) => (
            <div className='product' key={product.id}>
            
                <div  className='product-image'>
                    <img src={product.image} alt="image Not Found"/>
                </div>  
                <div className='product-details'>
                    <div className='product-name'>
                        {product.name}
                    </div>
                    <div className='product-price'>
                       ${product.price}.00
                    </div>
                </div>
                <div className='add_to_cart' onClick={() => dispatch({type:"ADD_TO_CART",id:product.id, product})}> add to cart</div>
                {product.status ==='hot'? <div className='hot'>Hot</div>:''}
                {product.status ==='new' ? <div className='new'>New</div> :''}
            </div>
            
        ))}
      
    </div>
    </div>
  )
}

export default Products;
