import React from 'react';

import './Cart.css'

const CartItem = ({ name, price, currency, onClick }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item-name">{name}</span>
            </div>
            <div className="cart-item-price">{price} {currency}</div>
        </div>
    );
}

export default CartItem;
