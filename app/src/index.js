import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './js/store/index';
import MainPage from './js/pages/MainPage';
import ProductDetailsPage from './js/pages/ProductDetailsPage';
import SearchResultsPage from './js/pages/SearchResultsPage';

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/products/top-products" component={MainPage} />
            <Route path="/products/productId=:productId?" component={ProductDetailsPage} />
            <Route path="/products/search=:searchValue" component={SearchResultsPage} />
        </Router>
    </Provider>,

    document.getElementById('root')
);