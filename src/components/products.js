/// <reference path="../../typings/react/react.d.ts" />
var React = require('react');
class Product extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    handleClick(event, product) {
        this.props.handleClick(product);
    }
    render() {
        let product = this.props.data;
        return React.createElement("div", {"className": "sub-section"}, React.createElement("div", null, "Name: ", product.get('name')), React.createElement("div", null, product.get('availability') <= 0 ? "Out of Stock." : "Only " + product.get('availability') + " in Stock", React.createElement("br", null), React.createElement("button", {"className": "primary-button", "disabled": !product.get('availability') ? true : false, "onClick": (e) => this.handleClick(e, product)}, "Add To Cart")));
    }
}
exports.Product = Product;
;
//# sourceMappingURL=products.js.map