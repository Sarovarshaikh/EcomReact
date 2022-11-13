import React ,{createContext, useState}from 'react';
import dslr from "../assets/dslr.jpg";
import headphones from "../assets/headphones.jpg";
import iphone from "../assets/iphone.jpg";
import microphone from "../assets/microphone.jpg";
import perfume from "../assets/perfume.jpg";
import rings from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products] = useState([
        {id:1, name:"Dslr", price:300, image:dslr,status:'hot'},
        {id:2, name:"Head phone", price:30, image:headphones,status:'new'},
        {id:3, name:"iPhone", price:400, image:iphone,status:'hot'},
        {id:4, name:"Microphone", price:500, image:microphone,status:'hot'},
        {id:5, name:"Perfume", price:400, image:perfume,status:'new'},
        {id:6, name:"Rings", price:200, image:rings,status:'new'},
        {id:7, name:"Shoes", price:500, image:shoes,status:'hot'},
        {id:8, name:"watch", price:600, image:watch,status:'new'}
    ])
  return (
    <ProductContext.Provider value={{products: [...products]}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;
