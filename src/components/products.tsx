/// <reference path="../../typings/react/react.d.ts" />
import * as React from 'react';
import {productType} from "../models/shop.ts";

export default class Product extends React.Component<any, any>{
    constructor(props, context) {
        super(props, context);
    }

    handleClick(event, product){
        this.props.handleClick(product);
    }

    render(){
        console.log("this.props product", this.props.data.toJS());
        let product :productType = this.props.data;
        return <div className="sub-section">
            <div>
                {product.get('name')}
            </div>
            <div>
                {product.get('availability')} in Stock.
                <br></br>
                <a className="primary-button" onClick={(e) => this.handleClick(e, product)}>Add To Cart</a>
            </div>
        </div>
    }
};

