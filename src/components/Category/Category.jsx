import React, {Component} from 'react'
import Select from 'react-select';
import {options} from "../../constants/categoryOptionsConstants";

class Category extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        selectedOption: null,
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
                                placeholder={'Choose Category'}
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

    handleChange = selectedOption => {
        this.setState({selectedOption});
    };

    submitHandler = (e) => {
        localStorage.setItem('category', JSON.stringify(this.state.selectedOption))
    }
}

export default Category