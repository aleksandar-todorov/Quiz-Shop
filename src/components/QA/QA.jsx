import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

import Question from '../Question/Question.jsx';
import QuestionCount from '../QuestionCount/QuestionCount.jsx';
import AnswerOption from '../AnswerOption/AnswerOption.jsx';
import './QA.css'

const QA = (props) => {

    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <CSSTransitionGroup
            className="QA-container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div key={props.questionId}>
                <QuestionCount counter={props.questionId} total={props.questionTotal}/>
                <Question content={props.question}/>
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>
        </CSSTransitionGroup>
    );
};

export default QA;
