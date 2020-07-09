import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { fetchProducts } from "./actions/productActions";
import MainPage from "./components/MainPage";
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import ProductList from './components/ProductList';


const App = props => {
    useEffect(() => {
        (async () => {
            await props.fetchProducts();
        })();
    });

    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            <Route path="/products/:productId" component={ProductPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/category/:categoryId" component={ProductList} />
        </BrowserRouter>
    );

}


const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    App
);
