import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {history} from './helpers/history';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }
}

export default App;
