import React from 'react'

import "./ErrorPage.css"
import NotFoundImg from "../../images/404face.png";

function ErrorPage() {
    return (
        <>
            <div className="text-center mt-5">
            <h3>Sorry, Page Not Found</h3>
            </div>
            <div className="container">
                <div className="four-zero-four">
                    <img className="home-img no-found-picture" src={NotFoundImg} alt="eho"/>
                </div>
            </div>
        </>
    )
}

export default ErrorPage