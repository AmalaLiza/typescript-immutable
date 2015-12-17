"use strict";
/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';
import {cartItemType} from '../models/cartitem.ts';


interface CartProps {
    index: number;
    data: cartItemType;
    handleClick: Function;
}

export default class Cart extends React.Component<CartProps, any> {

    handleClick(cartItem) {
        this.props.handleClick(cartItem, this.props.index);
    }

    render() {
        let cartItem:cartItemType = this.props.data;
        return <div className="sub-section">
            <div>
                Item Name : {cartItem.get('name')}
            </div>
            <div>
                Quantity: {cartItem.get('quantity')}
            </div>
            <button className="primary-button" onClick={() => {this.handleClick(cartItem)}}>Remove From Cart</button>
        </div>
    }
};