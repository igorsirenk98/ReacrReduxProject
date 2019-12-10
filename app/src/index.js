import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './js/store/index';
import TopProducts from './js/components/TopProducts';
import ProductDetails from './js/components/ProductDetails';
import SearchResults from './js/components/SearchResults';
import { Header } from './js/components/basicComponents/Header'

render(
    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route path="/products/top-products" component={TopProducts} />
                <Route path="/products/productId=:productId" component={ProductDetails} />
                <Route path="/products/search=:searchInputValue" component={SearchResults} />
                <Route component={TopProducts} />
            </Switch>
        </Router>
    </Provider>,

    document.getElementById('root')
);