import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";

import authentication from "../reducers/authReducer";
import cartReducer from '../reducers/cartReducer';
import productsReducer from '../reducers/productsReducer';
import productsData from '../data/products';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    auth : authentication
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,
    {
        products: productsData // initial store values
    },
    composeEnhancers(applyMiddleware(thunk)));
