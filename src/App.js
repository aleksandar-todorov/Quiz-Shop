import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Quiz from "./components/Quiz/Quiz";
import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./components/ErrorPage/ErrorPage";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <ProtectedRoute path={"/login"} component={Login}/>
                    <ProtectedRoute path={"/register"} component={Register}/>
                    <Route path={"/shop"} component={Shop}/>
                    <Route path={"/about"} component={About}/>
                    <PrivateRoute path={"/quiz"} component={Quiz}/>
                    <PrivateRoute path={"/profile"} component={Profile}/>
                    <Route component={ErrorPage}/>
                </Switch>
                <Footer/>
            </>
        );
    }
}

export default App
