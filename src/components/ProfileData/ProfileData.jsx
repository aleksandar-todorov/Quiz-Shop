import React, {Component} from 'react'
import {connect} from "react-redux";
import kinvey from "../../API/ApiCalls";
import {userActions} from "../../actions/userActions";
import Message from "../Message/Message";

class ProfileData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            error: null,
            success: null
        };
    }

    //TODO upload pic with cloudanary
    render() {

        const {error, success} = this.state;

        return (
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="form-group row mb-4">
                            <label htmlFor="username" className="col-4 col-form-label">Choose</label>
                            <div className="col-8">
                                <input id="username" name="username" placeholder="new Username"
                                       className="form-control" required="required"
                                       type="text" onChange={this.changeUsername}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-4 col-8">
                                <button name="submit" type="submit"
                                        className="btn btn-primary" onClick={this.submitHandler}>Update My Profile
                                </button>
                            </div>
                        </div>
                        <Message error={error} success={success}/>
                    </form>
                </div>
            </div>
        )
    }

    changeUsername = e => {
        this.setState({username: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.username === this.props.user) {
            this.setState({
                error: "Your new username must be different than the old one!"
            })
        } else {
            kinvey.get('user', `?query={"username":"${this.state.username}"}`, 'kinvey')
                .then((res) => {
                    if (res === undefined || res.length === 0) {
                        kinvey.get('user', `?query={"username":"${this.props.user}"}`, 'kinvey')
                            .then((res) => {
                                let user = res[0]
                                user.username = this.state.username
                                kinvey.update('user', `${user._id}`, 'kinvey', {
                                    ...user
                                })
                            })
                        this.setState({
                            error: null,
                            success: 'You successfully changed your username. You will be logged out.'
                        })
                        setTimeout(() => {
                            kinvey.logout();
                            this.props.logout();
                            localStorage.clear();
                            this.props.history.push("/login");
                        }, 2000);
                    } else {
                        this.setState({
                            error: "Sorry this username is already taken!"
                        })
                    }
                })
        }
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

const mapDispatchToProps = {
    logout: userActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileData)