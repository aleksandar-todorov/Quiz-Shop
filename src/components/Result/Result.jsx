import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import './Result.css'

const Result = (props) => {
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
                <strong>{props.quizResult}</strong>
            </div>
        </CSSTransitionGroup>
    );
};

export default Result;
