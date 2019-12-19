import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from './history/history';
import TopProducts from './containers/TopProducts/TopProducts';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import SearchResults from './containers/SearchResults/SearchResults';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/controls/Header';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/" component={TopProducts} />
                    <Route path="/products/productId=:productId" component={ProductDetails} />
                    <Route path="/products/search=:searchInputValue" component={SearchResults} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        )
    }
}

export default App;