import React, {Component} from 'react'

import Category from "../Category/Category";
import QuizResult from "../QuizResult/QuizResult";
import QA from "../QA/QA";
import quizQuestions from "../../data/quizQuestions";
import './Quiz.css'

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answers: {},
            result: '',
            category: JSON.parse(localStorage.getItem('category'))
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
        if (this.state.category !== null) {
            const answerOptions = quizQuestions[this.state.category.value].map(question => question.answers)
            this.setState({
                question: quizQuestions[this.state.category.value][0].question,
                answerOptions: answerOptions[0]
            });
        }
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);

        if (this.state.questionId < quizQuestions[this.state.category.value].length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        this.setState((state) => ({
            answers: {
                ...state.answers,
                [answer]: (state.answers[answer] || 0) + 1
            },
            answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter,
            questionId,
            question: quizQuestions[this.state.category.value][counter].question,
            answerOptions: quizQuestions[this.state.category.value][counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answers = this.state.answers;
        const answersKeys = Object.keys(answers);
        const answersValues = answersKeys.map(key => answers[key]);
        const maxAnswerCount = Math.max.apply(null, answersValues);

        return answersKeys.filter(key => answers[key] === maxAnswerCount);
    }

    setResults(result) {
        if (result.length === 1)
            this.setState({result: result[0]});
        else
            this.setState({result: 'You are OK in that category! Try another.'});
    }

    renderQA() {
        return (
            <QA
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions[this.state.category.value].length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
        return <QuizResult quizResult={this.state.result}/>;
    }

    render() {
        const divBackgroundStyle = {
            background: this.state.category.color,
        };

        return (
            <>
                <Category/>
                <div className="qa py-5" style={divBackgroundStyle}>
                    {this.state.category ? this.state.result ? this.renderResult() : this.renderQA() : null}
                </div>
            </>
        );
    }
}

export default Quiz