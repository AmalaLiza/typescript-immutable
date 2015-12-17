"use strict";
/// <reference path="../../typings/react/react.d.ts" />
var React = require('react');
class Cart extends React.Component {
    handleClick(cartItem) {
        this.props.handleClick(cartItem, this.props.index);
    }
    render() {
        let cartItem = this.props.data;
        return React.createElement("div", {"className": "sub-section"}, React.createElement("div", null, "Item Name : ", cartItem.get('name')), React.createElement("div", null, "Quantity: ", cartItem.get('quantity')), React.createElement("a", {"className": "primary-button", "onClick": (event) => { this.handleClick(cartItem); }}, "Remove From Cart"));
    }
}
exports.Cart = Cart;
;
//# sourceMappingURL=cart.js.map