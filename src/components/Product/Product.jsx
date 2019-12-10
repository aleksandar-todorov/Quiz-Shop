import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isInCart } from '../../reducers/cartReducer';
import { cartActions } from '../../actions/cartActions';
import './Product.css'

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, currency, image, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} className="product-image" alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product-price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(cartActions.addToCart(id)),
    removeFromCart: (id) => dispatch(cartActions.removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
