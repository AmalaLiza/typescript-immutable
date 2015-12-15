///<reference path = "../typings/immutable/immutable.d.ts";

import Immutable from 'immutable';
import {shop} from './models/shop.ts';
import {actionType} from './models/action.ts';

const initialState : shop = Immutable.fromJS(
    {
        cartList: [
            {
                id: 1,
                name: "Product One",
                quantity:1
            },
            {
                id: 2,
                name: "Product Two",
                quantity:2
            }
        ],
        productList:[
            {
                name: "Product One",
                id: 1,
                availability:2
            },
            {
                name: "Product Two",
                id: 2,
                availability:2
            },
            {
                name: "Product Three",
                id: 3,
                availability:4
            }
        ]
    });

export function rootReducer(state:product = initialState, action:actionType) {
    switch (action.type) {

        case "ADD_TO_CART":
            state.updateIn(['cartList'], cartList => cartList.push(action.product));
            state.updateIn(['productList'], productList => {
                productList.map(product => {
                    if(action.product.get("id") ==  product.get("id")){
                        return product.update("availability", value => value-1);
                    }
                });
            });
            return state;
        case "REMOVE_FROM_CART":
            //return state.updateIn(['cartList'], cartList =>cartList.slice(action.id));

        default:
            return state;
    }
}