import {cartConstants} from "../constants/cartConstants";

export const cartActions = {
    addToCart,
    removeFromCart
};

function addToCart(productId) {
    return {
        type: cartConstants.CART_ADD,
        payload: {
            productId
        }
    }
}

function removeFromCart(productId) {
    return {
        type: cartConstants.CART_REMOVE,
        payload: {
            productId
        }
    }
}