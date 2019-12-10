import React, {Component} from 'react'
import Select from 'react-select';

const options = [
    {value: 'random', label: 'Random'},
    {value: 'health', label: 'Health'},
    {value: 'money', label: 'Money'},
    {value: 'relationships', label: 'Relationships'},
    {value: 'career', label: 'Career'},
    {value: 'tech', label: 'Tech'},
    {value: 'create', label: 'Creative'},
    {value: 'fun', label: 'Fun'},
    {value: 'mindBending', label: 'Mind Bending'},
];

class Quiz extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    };

    render() {

        const {selectedOption} = this.state;

        return (
            <form onSubmit={this.submitHandler}>

                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Pick a Category for your Quiz</h1>
                </div>

                <div className="form-group my-5 w-50 mx-auto">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            />
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-lg btn-dark btn-block m-auto" type="submit">Take a Quiz
                            </button>
                        </div>
                    </div>

                </div>

            </form>
        );
    }

    submitHandler = (e) => {
        e.preventDefault();
    }
}

export default Quiz