import React from 'react';

import './QuestionCount.css'

const QuestionCount = (props) => {
    return (
        <div className="questionCount">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
};

export default QuestionCount;
