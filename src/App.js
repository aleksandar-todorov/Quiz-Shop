import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import {createBrowserHistory} from "history"
import {createStore, applyMiddleware, compose} from "redux"
import {isLoggedInReducer} from './reducers/authReducer'
import thunk from 'redux-thunk'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {Provider} from "react-redux"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(isLoggedInReducer, composeEnhancers(applyMiddleware(thunk)));
const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/register"} component={Register}/>
                    <Route component={ErrorPage}/>
                </Switch>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
