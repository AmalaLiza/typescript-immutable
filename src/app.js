"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
var React = require('react');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var cart_tsx_1 = require('./components/cart.tsx');
var products_tsx_1 = require('./components/products.tsx');
var actions_ts_1 = require('./actions.ts');
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        let { data, actions } = this.props;
        let cartList = data.get("cartList");
        let productList = data.get("productList");
        let productListElements = productList.map((product, index) => (React.createElement(products_tsx_1.default, {"handleClick": actions.addToCart, "data": product})));
        let cartListElements = cartList.map((cartItem, index) => (React.createElement(cart_tsx_1.default, {"handleClick": actions.removeFromCart, "data": cartItem, "index": index})));
        return React.createElement("div", null, React.createElement("div", null, React.createElement("h1", {"className": "heading"}, "Shop Stop!")), React.createElement("div", {"className": "left-section"}, React.createElement("h1", {"className": "section-header"}, "Products Available"), React.createElement("div", null, productListElements)), React.createElement("div", {"className": "right-section"}, React.createElement("h1", {"className": "section-header"}, "Items in cart"), React.createElement("div", null, cartListElements)));
    }
}
exports.App = App;
function mapStateToProps(state) {
    return { data: state };
}
function mapDispatchToProps(dispatch) {
    return { actions: redux_1.bindActionCreators(actions_ts_1.default, dispatch) };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=app.js.map