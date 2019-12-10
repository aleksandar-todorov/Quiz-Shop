import React from 'react';

import './Cart.css'

const CartItem = ({name, price, currency, link, onClick}) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <a href={link} target="_blank" rel="noopener noreferrer"><span className="cart-item-name">{name}</span></a>
            </div>
            <div className="cart-item-price">{price} {currency}</div>
        </div>
    );
}

export default CartItem;
