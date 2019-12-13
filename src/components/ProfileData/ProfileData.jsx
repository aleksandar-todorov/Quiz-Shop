import React, {Component} from 'react'
import {connect} from "react-redux";
import kinvey from "../../API/ApiCalls";
import {userActions} from "../../actions/userActions";

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

        const {username, error, success} = this.state;

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

                        {
                            error ?
                                (
                                    <div className="text-center alert alert-danger m-auto font-weight-bold">
                                        {error}
                                    </div>
                                ) : null
                        }

                        {
                            success ?
                                (
                                    <div className="text-center alert-success m-auto font-weight-bold">
                                        {success}
                                    </div>
                                ) : null
                        }

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
                error: "Your username must be different than previews one!"
            })
        } else {

            kinvey.get('user', `?query={"username":"${this.state.username}"}`, 'kinvey')
                .then((res) => {

                    if (res) {
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
                            success: 'You successfully changed your username. You will be logged out after 3 seconds.'
                        })
                        setTimeout(() => {
                            kinvey.logout();
                            this.props.logout();
                            localStorage.clear();
                            this.props.history.push("/login");

                        }, 3000);
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