import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import './QuizResult.css'
import kinvey from "../../API/ApiCalls";
import {connect} from "react-redux";

class QuizResult extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        kinvey.get('user', `?query={"username":"${this.props.username}"}`, 'kinvey')
            .then((res) => {
                const quizzes = +res[0].quizzes + 1
                const id = res[0]._id
                kinvey.update('user', `${id}`, 'kinvey', {
                    quizzes,
                    clicks : res[0].clicks
                })
            })
    }


    render() {
        return (
            <CSSTransitionGroup
                className="QA-container result"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear
                transitionAppearTimeout={500}
            >
                <div className="text-center">
                    <strong>{this.props.quizResult}</strong>
                </div>
            </CSSTransitionGroup>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.user,
})

export default connect(mapStateToProps)(QuizResult)
