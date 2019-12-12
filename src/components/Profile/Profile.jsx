import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Route, Switch} from 'react-router-dom'
import ProfileData from "../ProfileData/ProfileData";
import ProfileQuizzes from "../ProfileQuizzes/ProfileQuizzes";
import ProfileHistory from "../ProfileHistory/ProfileHistory";
import ProfileSuggestions from "../ProfileSuggestions/ProfileSuggestions";

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="list-group">
                            <Link to={"/profile/data"}
                                  className="list-group-item list-group-item-action">Personal
                                Data</Link>
                            <Link to={"/profile/quizzes"}
                                  className="list-group-item list-group-item-action">Quizzes</Link>
                            <Link to={"/profile/history"}
                                  className="list-group-item list-group-item-action">History</Link>
                            <Link to={"/profile/suggestions"}
                                  className="list-group-item list-group-item-action">Suggestions</Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Hello {`${this.props.user}`}, choose an option from the menu.</h4>
                                        <hr/>
                                    </div>
                                </div>
                                <Switch>
                                    <Route path={"/profile/data"} component={ProfileData}/>
                                    <Route path={"/profile/quizzes"} component={ProfileQuizzes}/>
                                    <Route path={"/profile/history"} component={ProfileHistory}/>
                                    <Route path={"/profile/suggestions"} component={ProfileSuggestions}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user : state.auth.user,
    isLoggedIn: state.auth.user
})

export default connect(mapStateToProps)(Profile);