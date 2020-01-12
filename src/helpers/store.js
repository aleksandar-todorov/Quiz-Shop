import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/authReducer";
import cartReducer from '../reducers/cartReducer';
import productsReducer from '../reducers/productsReducer';
import productsData from '../data/productsData';

const rootReducer = combineReducers({
    auth : authReducer,
    products: productsReducer,
    cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,
    {
        products: productsData
    },
    composeEnhancers(applyMiddleware(thunk)));
