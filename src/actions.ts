import {cartItemType} from './models/cartitem.ts';
import {productType} from './models/shop.ts';

export default {

    addToCart(product:productType){
        return {type: 'ADD_TO_CART', product};
    },

    removeFromCart(cartItem:cartItemType, index:number){
        return {type: 'REMOVE_FROM_CART', cartItem, index};
    }

}