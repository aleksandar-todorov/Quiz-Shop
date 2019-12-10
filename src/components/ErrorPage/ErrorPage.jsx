import React from 'react'

import "./ErrorPage.css"
import NotFoundImg from "../../images/404face.png";

function ErrorPage() {
    return (
        <div className="container">
            <div id="fouronefour">
                <h3>Sorry, Page Not Found</h3>
                <img className="home-img no-found-picture" src={NotFoundImg} alt="eho"/>
            </div>
        </div>
    )
}

export default ErrorPage