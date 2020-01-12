import React, {Component} from 'react'
import kinvey from "../../API/ApiCalls";
import {connect} from "react-redux";

class ProfileQuizzes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzes: ''
        };
    }

    componentDidMount() {
        kinvey.get('user', `?query={"username":"${this.props.username}"}`, 'kinvey')
            .then((res) => {
                this.setState({
                    quizzes: res[0].quizzes
                })
            })
    }

    render() {
        return (
            <div className="text-center">
                <h3>You finished <strong>{`${this.state.quizzes}`}</strong> quizzes.</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.user,
})

export default connect(mapStateToProps)(ProfileQuizzes)