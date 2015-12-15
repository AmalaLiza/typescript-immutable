/// <reference path="../../typings/react/react.d.ts" />
import * as React from 'react';
import {productType} from "../models/shop.ts";

interface ProductProps {
    data : productType;
    index : number;
    handleClick : Function;
}

export default class Product extends React.Component<ProductProps, any>{
    constructor(props, context) {
        super(props, context);
    }

    handleClick(event, product){
        this.props.handleClick(product);
    }

    render(){
        let product = this.props.data;
        return <div className="sub-section">
            <div>
                Name: {product.get('name')}
            </div>
            <div>
                Only {product.get('availability')} in Stock.
                <br></br>
                <a className="primary-button" onClick={(e) => this.handleClick(e, product)}>Add To Cart</a>
            </div>
        </div>
    }
};

