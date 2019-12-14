import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './Home.css'
import QuizShopPic from '../../images/quizshop.png'
import NotFoundPic from '../../images/404face.png'
import kinvey from "../../API/ApiCalls";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quizzes: '',
            clicks: ''
        };
    }

    componentDidMount() {
        kinvey.get('user', `?query={"username":"${this.props.user}"}`, 'kinvey')
            .then((res) => {
                this.setState({
                    quizzes: +res[0].quizzes,
                    clicks: +res[0].clicks
                })
            })
    }

    renderLoggedInView = () => (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>Welcome, <strong>{`${this.props.user}`}</strong></h3>
                    {this.state.quizzes > 0 ?
                        <>
                            <div className="m-5">
                                <h3>You finished <strong>{`${this.state.quizzes}`}</strong> quizzes.</h3>
                                <br/>
                                <h3> You purchased <strong>{`${this.state.clicks}`}</strong> products from the shop.</h3>
                            </div>
                            <div>
                                <div>
                                    <Link to={"/quiz"} className="btn btn-dark btn-lg">Take one more quiz? </Link>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="four-zero-four">
                                <img className="home-img no-found-picture" src={NotFoundPic} alt=''/>
                            </div>
                            <div>
                                <div>
                                    <p>You haven participated in any quizzes yet...</p>
                                </div>
                                <div>
                                    <Link to={"/quiz"} className="btn btn-dark btn-lg">Take the first one? </Link>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </div>
    );


    renderNotLoggedView = () => (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 px-md-5 mx-5">
            <div className="col-md-6">
                <h2>Buy products <span className="text-muted">which will improve your life!</span>
                </h2>
                <p className="lead">Join our community.</p>
                <p className="lead">Choose a Category.</p>
                <p className="lead">Take a Quiz.</p>
                <p className="lead">Shop!</p>
                <p className="lead">Improve!</p>
                <p className="lead">Enjoy life!</p>
            </div>
            <div className="col-md-4">
                <img className="home-img home-quiz-picture center-block" src={QuizShopPic} alt=''/>
            </div>
        </div>
    );

    render() {
        return (
            <>
                {this.props.isLoggedIn ? this.renderLoggedInView() : this.renderNotLoggedView()}
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Home)

