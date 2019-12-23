import React, {Component} from 'react'
import Select from 'react-select';
import {categoryOptions} from "../../constants/categoryOptionsConstants";
import chroma from "chroma-js";

class Category extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        selectedOption: null,
    };

    render() {

        const dot = (color = '#ccc') => ({
            alignItems: 'center',
            display: 'flex',

            ':before': {
                backgroundColor: color,
                borderRadius: 10,
                content: '" "',
                display: 'block',
                marginRight: 8,
                height: 10,
                width: 10,
            },
        });

        const colourStyles = {
            control: styles => ({ ...styles, backgroundColor: 'white' }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                const color = chroma(data.color);
                return {
                    ...styles,
                    backgroundColor: isDisabled
                        ? null
                        : isSelected
                            ? data.color
                            : isFocused
                                ? color.alpha(0.1).css()
                                : null,
                    color: isDisabled
                        ? '#ccc'
                        : isSelected
                            ? chroma.contrast(color, 'white') > 2
                                ? 'white'
                                : 'black'
                            : data.color,
                    cursor: isDisabled ? 'not-allowed' : 'default',

                    ':active': {
                        ...styles[':active'],
                        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
                    },
                };
            },
            input: styles => ({ ...styles, ...dot() }),
            placeholder: styles => ({ ...styles, ...dot() }),
            singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
        };

        const {selectedOption} = this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Pick a Category for your Quiz</h1>
                </div>

                <div className="form-group my-5 w-50 mx-auto">
                    <div className="row">
                        <div className="col-md-9 m-auto font-weight-bold">
                            <Select
                                value={selectedOption}
                                placeholder={'Choose Category'}
                                onChange={this.handleChange}
                                options={categoryOptions}
                                styles={colourStyles}
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

    submitHandler = () => {
        localStorage.setItem('category', JSON.stringify(this.state.selectedOption))
    }
}

export default Category