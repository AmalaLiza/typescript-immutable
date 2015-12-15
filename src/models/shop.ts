import cartItem from './cartitem.ts';

export type product = {
    id:number,
    name:string,
    availability:number
}

export type shop = {
    cartList: cartItem[],
    productList:product[]
}
