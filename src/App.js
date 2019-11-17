import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import {createStore, applyMiddleware, compose} from "redux";
import {isLoggedInReducer} from './reducers/authReducer'
import thunk from 'redux-thunk'
import './App.css';
import Home from './components/Home/Home'
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(isLoggedInReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ));


const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
