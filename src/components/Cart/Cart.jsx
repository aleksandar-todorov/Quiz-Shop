import React from 'react';
import {connect} from 'react-redux';

import CartItem from '../CartItem/CartItem.jsx';
import {getCurrency, getItems, getTotal} from '../../reducers/cartReducer';
import {cartActions} from '../../actions/cartActions';
import './Cart.css'

const Cart = ({items, total, currency, removeFromCart}) => {
    return (
        <div>
            <h3 className="text-center mb-3">Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart-body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)}/>
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info mb-0">Cart is empty</div>
                        )}
                        <div className="cart-total">Total: {total} {currency}</div>
                        {items.length > 0 && (
                            <div className="cart-info mt-3">
                                <small>Click the name to buy</small>
                                <br/>
                                <small>Shipping fee depends on your location</small>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    items: getItems(state, props),
    currency: getCurrency(state, props),
    total: getTotal(state, props),
})

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(cartActions.removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
