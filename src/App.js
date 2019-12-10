import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Shop from "./components/Shop/Shop";
import Quiz from "./components/Quiz/Quiz";
import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {history} from './helpers/history';


class App extends Component {
    constructor(props) {
        super(props);
    }

    //TODO forbid /login and /register if the user is logged in.
    render() {
        return (
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/register"} component={Register}/>
                    <Route path={"/shop"} component={Shop}/>
                    <Route path={"/quiz"} component={Quiz}/>
                    <Route component={ErrorPage}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;
