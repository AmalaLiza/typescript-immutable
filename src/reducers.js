///<reference path='../typings/immutable/immutable.d.ts'/>
var Immutable = require('immutable');
const initialState = Immutable.fromJS({
    cartList: [
        {
            id: 1,
            name: "Product One",
            quantity: 1
        },
        {
            id: 2,
            name: "Product Two",
            quantity: 2
        },
        {
            id: 5,
            name: "Product Five",
            quantity: 1
        }
    ],
    productList: [
        {
            name: "Product One",
            id: 1,
            availability: 2
        },
        {
            name: "Product Two",
            id: 2,
            availability: 2
        },
        {
            name: "Product Three",
            id: 3,
            availability: 4
        }
    ]
});
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            let itemID = state.get('cartList').
                findIndex((cartItem) => action.product.get("id") == cartItem.get("id"));
            if (itemID >= 0) {
                state = state.updateIn(['cartList'], cartList => {
                    return cartList.map(cartItem => {
                        if (action.product.get("id") == cartItem.get("id")) {
                            return cartItem.update("quantity", value => value + 1);
                        }
                        else
                            return cartItem;
                    });
                });
            }
            else {
                let newCartItem = Immutable.fromJS({
                    id: action.product.get("id"),
                    name: action.product.get("name"),
                    quantity: 1
                });
                state = state.updateIn(['cartList'], cartList => cartList.push(newCartItem));
            }
            state = state.updateIn(['productList'], productList => {
                return productList.map(product => {
                    if (action.product.get("id") == product.get("id")) {
                        return product.update("availability", value => value - 1);
                    }
                    else
                        return product;
                });
            });
            return state;
        case "REMOVE_FROM_CART":
            let itemIndex = state.get('productList').
                findIndex((product) => action.cartItem.get("id") == product.get("id"));
            if (itemIndex >= 0) {
                state = state.updateIn(['productList'], productList => {
                    return productList.map(product => {
                        if (action.cartItem.get("id") == product.get("id")) {
                            return product.update("availability", value => value + 1);
                        }
                        else
                            return product;
                    });
                });
            }
            else {
                let backToproductList = Immutable.fromJS({
                    id: action.cartItem.get("id"),
                    name: action.cartItem.get("name"),
                    availability: 1
                });
                state = state.updateIn(['productList'], productList => productList.push(backToproductList));
            }
            state = state.updateIn(['cartList'], cartList => cartList.filter((cartItem) => action.cartItem.get("id") != cartItem.get("id")));
            return state;
        default:
            return state;
    }
}
exports.rootReducer = rootReducer;
//# sourceMappingURL=reducers.js.map