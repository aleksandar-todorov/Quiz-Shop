import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import kinvey from '../../API/ApiCalls'
import Home from '../Home/Home'
import {history} from "../../helpers/history";
import {userActions} from '../../actions/userActions'
import userService from '../../service/userService'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: null
        }
    }

    renderNotLoggedView = () => {
        const {username, password, error} = this.state;

        return (

            <form onSubmit={this.submitHandler}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Sign-In</h1>
                    <p>You are on one step of awesome products!</p>
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputUsername" name="username" className="form-control"
                           value={username} placeholder="Username" required="" autoFocus=""
                           onChange={this.changeUsername}/>
                    <label htmlFor="inputUsername">Username</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" name="password" className="form-control"
                           value={password} placeholder="Password" required=""
                           onChange={this.changePassword}/>
                    <label htmlFor="inputPassword">Password</label>
                </div>

                <button className="btn btn-lg btn-dark btn-block w-25 m-auto" type="submit">Sign In</button>

                <div className="text-center mb-4">
                    <p className="alreadyUser"> Don't have account? Then just
                        <Link to="/register"> Sign-Up</Link>!
                    </p>
                </div>

                {
                    error ?
                        (
                            <div className="text-center alert alert-danger w-50 m-auto font-weight-bold">
                                {error}
                            </div>
                        ) : null
                }
            </form>
        )
    }

    render() {
        return (
            <>
                {this.props.isLoggedIn ? {Home} : this.renderNotLoggedView()}
            </>
        )
    }

    changeUsername = e => {
        this.setState({username: e.target.value})
    }

    changePassword = e => {
        this.setState({password: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        kinvey.login(username, password).then((res) => {
            this.props.login(username);
            localStorage.setItem('user', JSON.stringify(username));
            userService.saveSession(res);
            history.push('/');
        }).catch(() => {
            this.setState({
                error: 'Bad Credentials, Please try again :)'
            })
        });
    }
}

const mapDispatchToProps = {
    login: userActions.login,
};

export default connect(null, mapDispatchToProps)(Login)