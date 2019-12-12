import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Shop from "./components/Shop/Shop";
import Quiz from "./components/Quiz/Quiz";
import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./components/ErrorPage/ErrorPage";


class App extends Component {
    constructor(props) {
        super(props);
    }

    //TODO forbid /login and /register if the user is logged in.
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/register"} component={Register}/>
                    <Route path={"/shop"} component={Shop}/>
                    <Route path={"/quiz"} component={Quiz}/>
                    <Route path={"/profile"} component={Profile}/>
                    <Route component={ErrorPage}/>
                </Switch>
                <Footer/>
            </>
        );
    }
}

export default withRouter(App);
