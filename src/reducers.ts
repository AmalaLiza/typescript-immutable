///<reference path='../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';
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

export function rootReducer(state:shop = initialState, action) {
    
   switch(action.type){
       
        case "ADD_TO_CART":
            state = state.updateIn(['cartList'], cartList => cartList.push(action.product));
            state = state.updateIn(['productList'], productList => {
                return productList.map(product => {
                    if(action.product.get("id") ==  product.get("id")){
                       return product.update("availability", value => value-1);
                    } else
                        return product;
                });
            });
            return state;

        case "REMOVE_FROM_CART":
            return state.updateIn(['cartList'], cartList => cartList.slice(action.index, action.index));

        default:
            return state;
    }
}