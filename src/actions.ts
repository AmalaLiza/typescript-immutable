export default {

    addToCart(product){
        console.log(product)
        return {type: 'ADD_TO_CART', product};
    },

    removeFromCart(id){
        return {type: 'REMOVE_FROM_CART', id};
    }

}