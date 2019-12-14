import React, {Component} from 'react'

import '../Cart/Cart.css'
import kinvey from "../../API/ApiCalls";
import {connect} from "react-redux";

class CartItem extends Component {
    constructor(props) {
        super(props);
    }

    handleHistoryClick = () => {
        window.open(this.props.link)
        kinvey.get('user', `?query={"username":"${this.props.username}"}`, 'kinvey')
            .then((res) => {
                const clicks = +res[0].clicks + 1
                const id = res[0]._id
                kinvey.update('user', `${id}`, 'kinvey', {
                    clicks,
                    quizzes : res[0].quizzes
                })
            })
    }

    render() {

        const {name, price, currency, onClick} = this.props;

        return (
            <div className="cart-item">
                <div>
                    <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                    <button className="btn btn-primary p-1 ml-1" onClick={this.handleHistoryClick}><span
                        className="cart-item-name ml-0">{name}</span></button>
                </div>
                <div className="cart-item-price">{price} {currency}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    username: state.auth.user
})

export default connect(mapStateToProps)(CartItem);
