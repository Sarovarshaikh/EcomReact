
 export const CartReducer = (state, action) => {
    const {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch(action.type){
        case "ADD_TO_CART":
            const check = shoppingCart.find(product => product.id === action.id);
            if(check){
                return state;
            } else{
                product = action.product;
                product['qty'] = 1;
                updatedQty = qty + 1;
                product['qty'] = 1;
                updatedPrice = totalPrice + product.prince;
                return{shoppingCart: [product,...shoppingCart], totalPrice:
                    updatedPrice, qty:updatedQty 
                }
            }
            break;
            case 'INC':
                product = action.cart;
                product.qty = product.qty + 1;
                updatedPrice = totalPrice + product.prince;
                updatedQty = qty + 1;
                index = shoppingCart.findIndex(cart => cart.id === action.id);
                shoppingCart[index] = product;
                return{shoppingCart: [...shoppingCart], totalPrice: updatedPrice,qty:updatedQty}
                break;

            case 'DEC':
                product = action.cart;
                if(product.qty >1){
                    product.qty = product.qty -1;
                    updatedPrice = totalPrice - product.prince;
                    updatedQty = qty - 1;
                    shoppingCart[index] = product;
                    return{shoppingCart: [...shoppingCart], totalPrice: updatedPrice,qty:updatedQty}

                }
                else{
                    return state;
                }
                break;
                case 'DELETE':
                    const filtered =  shoppingCart.filter(product =>product.id !== action.id)
                    product = action.cart;
                    updatedQty = qty -product.qty;
                    updatedPrice = totalPrice - product.prince*product.qty;
                    return {shoppingCart:[...filtered], totalPrice: updatedPrice, qty: updatedQty}
                    break;
                case 'EMPTY':
                    return{shoppingCart:[], totalPrice:0, qty:0}
            default:
            return state;
            // console.log("add to cart case");
    }

};  


