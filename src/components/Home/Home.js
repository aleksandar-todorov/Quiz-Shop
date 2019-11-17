import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {isLoggedInReducer} from "../../reducers/authReducer"
import './Home.css'
import Brain from '../../images/quizshop.png'

class Home extends Component {

    constructor(props) {
        super(props);
    }

    renderLoggedInView = () => {
        return (<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="fouronefour">
                        <img className="no-found-picture" src="./images/404face.png"/>
                    </div>
                    <div className="error-template">
                        <div className="error-details">
                            <p>
                                You haven participated in any quizzes yet...
                            </p>
                        </div>
                        <div className="actions">
                            <Link to={"Quizzes"} className="btn btn-dark btn-lg">Take the first one? </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

    renderNotLoggedView = () => (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="col-md-7">
                <h2 className="featurette-heading">Buy products <span className="text-muted">which will improve your life!</span>
                </h2>
                <p className="lead">Join our community.</p>
                <p className="lead" >Choose a Category.</p>
                <p className="lead">Take a Quiz.</p>
                <p className="lead">Shop!</p>
                <p className="lead">Improve!</p>
                <p className="lead">Enjoy life!</p>
            </div>
            <div className="col-md-5">
                <img className="home-quiz-picture" src={Brain} alt=''/>
            </div>
        </div>
    )

    render() {
        return (
            <>
                {this.props.isLoggedIn ? this.renderLoggedInView() : this.renderNotLoggedView()}
            </>
        )
    }
}

const mapStateToProps = (isLoggedInReducer) => {
    return {
        isLoggedIn: isLoggedInReducer
    }
}


export default connect(mapStateToProps)(Home);