exports.default = {
    addToCart(product) {
        return { type: 'ADD_TO_CART', product };
    },
    removeFromCart(cartItem, index) {
        return { type: 'REMOVE_FROM_CART', cartItem, index };
    }
};
//# sourceMappingURL=actions.js.map