import React, {Component} from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import {connect} from "react-redux"

import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {history} from './helpers/history';
import {alertActions} from './actions/alertActions';


class App extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        // console.log(this.props)
        const {alert} = this.props;

        return (
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/register"} component={Register}/>
                    <Route component={ErrorPage}/>
                </Switch>
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
                    </div>
                </div>
                <Footer/>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {alert: state.alert};
}

const mapDispatchToProps = {
    clearAlerts: alertActions.clear
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
