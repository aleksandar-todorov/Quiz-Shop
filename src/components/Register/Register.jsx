import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import kinvey from '../../API/ApiCalls'
import Message from "../Message/Message";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            error: null,
            success: null,
        }
    }

    render() {

        const {username, password, repeatPassword, error, success} = this.state;

        return (

            <form onSubmit={this.submitHandler}>

                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Sign-Up</h1>
                    <p>Register once and shop awesome products!</p>
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

                <div className="form-label-group">
                    <input type="password" id="inputRePassword" name="rePassword" className="form-control"
                           value={repeatPassword} placeholder="Re-Password" required=""
                           onChange={this.changeRepeatPassword}/>
                    <label htmlFor="inputRePassword">Re-Password</label>
                </div>

                <button className="btn btn-lg btn-dark btn-block w-25 m-auto" type="submit">Sign Up</button>

                <div className="text-center mb-4">
                    <p className="alreadyUser"> Already have account? Then just
                        <Link to="/login"> Sign-In</Link>!
                    </p>
                </div>
                <div className="w-50 m-auto">
                <Message error={error} success={success}/>
                </div>
            </form>
        )
    }

    changeUsername = e => {
        this.setState({username: e.target.value})
    }

    changePassword = e => {
        this.setState({password: e.target.value})
    }

    changeRepeatPassword = e => {
        this.setState({repeatPassword: e.target.value})
    }

    //input register validations
    submitHandler = (e) => {
        e.preventDefault();
        const {username, password, repeatPassword} = this.state;
        if (username.length < 3) {
            this.setState({
                error: 'The username should be at least 3 characters long'
            })
        } else if (password.length < 3) {
            this.setState({
                error: 'The password should be at least 3 characters long'
            })
        } else if (repeatPassword !== password) {
            this.setState({
                error: 'Passwords must match'
            })
        } else {
            kinvey.post('user', '', 'basic', {
                username,
                password,
                clicks: 0,
                quizzes: 0
            }).then((res) => {
                this.setState({
                    error: null,
                    success: 'You registered successfully!'
                })
                setTimeout(() => this.props.history.push("/login"), 1200)
            }).catch(() => {
                this.setState({
                    error: "Sorry this username is already taken!"
                })
            })
        }
    }
}

export default Register