import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { List } from './basicComponents/List';
import { fetchProductsBySearch } from '../actions/ProductsBySearch';

const mapStateToProps = state => ({
    searchedProducts: state.productsBySearch.searchedProducts,
    error: state.topProducts.error
});

const containerStyles = {
    'maxWidth': '1024px'
};

class SearchResults extends Component {
    componentDidUpdate(prevProps) {
        const { searchInputValue: currentSearchInputValue } = this.props.match.params;
        const { searchInputValue: prevSearchInputValue } = prevProps.match.params;

        if (currentSearchInputValue !== prevSearchInputValue) {
            this.props.dispatch(fetchProductsBySearch(currentSearchInputValue));
        }
    }

    componentDidMount() {
        const { searchInputValue } = this.props.match.params;

        this.props.dispatch(fetchProductsBySearch(searchInputValue));
    }

    render() {
        const { searchedProducts, error } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        return (
            <>
            <CssBaseline />
                <Container fixed style={containerStyles}>
                    {searchedProducts.length &&
                        <List products={searchedProducts}/>
                    }
                </Container>
            </>
        ); 
    }
}

export default connect(mapStateToProps)(SearchResults);