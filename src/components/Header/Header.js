import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import "./Header.css"

class Header extends Component {

    constructor(props) {
        super(props);
    }

    renderLoggedInView = () => (
        <>
            <Link to={"/user/info"} className="py-2 d-none d-md-inline-block">My Profile</Link>
            <Link to={"/quizzes"} className="py-2 d-none d-md-inline-block">Take Quiz</Link>
            <Link to={"/logout"} className="py-2 d-none d-md-inline-block">Logout</Link>
        </>
    )

    renderNotLoggedView = () => (<Link to={"/login"} className="py-2 d-none d-md-inline-block">Login</Link>)

    render() {
        return (
            <>
                <header id="site-header">
                    <nav className="site-header sticky-top py-1">
                        <div className="container d-flex flex-column flex-md-row justify-content-between">
                            <Link to="/" className="py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     stroke="currentColor"
                                     strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                     className="d-block mx-auto" role="img"
                                     viewBox="0 0 24 24" focusable="false">
                                    <title>QuizShop Home</title>
                                    <circle cx="12" cy="12" r="10"/>
                                    <path
                                        d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94">
                                    </path>
                                </svg>
                            </Link>
                            {this.props.isLoggedIn ? this.renderLoggedInView() : this.renderNotLoggedView()}
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

const mapStateToProps = (isLoggedInReducer) => {
    return {
        isLoggedIn: isLoggedInReducer
    }
}

export default connect(mapStateToProps)(Header)


