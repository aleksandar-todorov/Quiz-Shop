import {applyMiddleware, compose, createStore} from "redux";
import {authentication} from "../reducers/authReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(authentication, composeEnhancers(applyMiddleware(thunk)));
