import {cartItemType} from './cartitem.ts';
import * as Immutable from 'immutable';
export type productType = {
    id: number;
    name: string;
    availability: number;
}

export type shop = {
    cartList: cartItemType[];
    productList: productType[];
}