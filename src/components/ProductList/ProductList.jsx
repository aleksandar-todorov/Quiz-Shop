import React, {Component} from 'react'
import {connect} from 'react-redux';

import Product from '../Product/Product.jsx';
import './ProductList.css'
import {allCategoryOptions} from "../../constants/categoryOptionsConstants";
import Select from "react-select";

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        selectedOption: {value: "all", label: "All"},
    };

    render() {

        const {selectedOption} = this.state;

        return (
            <div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h3 className="text-right">Products</h3>
                    </div>
                    <div className="col-md-3">
                        <Select
                            value={selectedOption}
                            placeholder={'All'}
                            onChange={this.handleChange}
                            options={allCategoryOptions}
                        />
                    </div>
                </div>
                <ul className="product-list">
                    {this.props.products
                        .filter(product => selectedOption.value === 'all' || product.category === selectedOption.value)
                        .map(product => (
                        <li key={product.id} className="product-list-item">
                            <Product {...product} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    handleChange = selectedOption => {
        console.log(selectedOption)
        this.setState({selectedOption});
    };
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductList)
