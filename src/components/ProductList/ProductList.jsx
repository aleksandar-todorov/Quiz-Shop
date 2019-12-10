import React from 'react';
import {connect} from 'react-redux';

import Product from '../Product/Product.jsx';
import './ProductList.css'

const ProductList = ({products}) => {
    return (
        <div>
            <h3 className="text-center mb-3">Products</h3>
            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-list-item">
                        <Product {...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductList)
