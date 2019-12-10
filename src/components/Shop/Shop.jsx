import React from 'react';

import ProductList from "../ProductList/ProductList.jsx";
import Cart from "../Cart/Cart.jsx";

const Shop = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 mb-4">
                    <h1 className="text-center">Quiz Shop</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <ProductList />
                </div>
                <div className="col-md-3">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default Shop;