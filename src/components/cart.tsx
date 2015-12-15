"use strict";
/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';

export default class Cart extends React.Component<any, any>{

    handleClick(cartItem){
        this.props.handleClick(cartItem);
    }

    render(){
        console.log("this.props cartItem", this.props);
        let cartItem = this.props.data;
        return <div className = "sub-section">
            <div>
                {cartItem.get('name')}
            </div>
            <div>
                Quantity: {cartItem.get('quantity')}
            </div>
            <a className="primary-button" onClick = {this.handleClick(cartItem)}>Remove From Cart</a>
        </div>
    }
};