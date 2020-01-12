import React from 'react';

import './Question.css'

const Question = (props) => {
    return <h3 className="question">{props.content}</h3>;
};

export default Question;
