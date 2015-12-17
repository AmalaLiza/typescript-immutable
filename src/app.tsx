"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cart from './components/cart.tsx';
import Product from './components/products.tsx';
import TodoActions from './actions.ts';
import {cartItemType} from './models/cartitem.ts';
import {productType} from './models/shop.ts';
import {actionType} from './models/action.ts';
import {shop} from './models/shop.ts';

interface AppProps {
    data: shop;
    actions: actionType;
}

export default class App extends React.Component<AppProps, any> {
    constructor() {
        super();
    }

    render() {
        let {data, actions} = this.props;
        let cartList:cartItemType[] = data.get("cartList");
        let productList:productType[] = data.get("productList");
        let productListElements = productList.map((product:productType, index:number) => (
            <Product
                handleClick={actions.addToCart}
                data={product}
            />
        ));
        let cartListElements = cartList.map((cartItem:cartItemType, index:number) => (
            <Cart
                handleClick={actions.removeFromCart}
                data={cartItem}
                index={index}
            />
        ));

        return <div>
            <div>
                <h1 className="heading">Shop Stop!</h1>
            </div>
            <div className="left-section">
                <h1 className="section-header">Products Available</h1>
                <div>
                    {productListElements}
                </div>
            </div>
            <div className="right-section">
                <h1 className="section-header">Items in cart</h1>
                <div>
                    {cartListElements}
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {data: state};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(TodoActions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);