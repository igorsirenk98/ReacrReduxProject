import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { List } from './basicComponents/List';
import { fetchProductsBySearch } from '../actions/ProductsBySearch';

const mapStateToProps = (state, ownProps) => ({
    searchValue: ownProps.searchValue.match.params.searchValue,
    products: state.topProducts.products,
    error: state.topProducts.error
});

class SearchResults extends Component {
    componentDidMount() {
        const { searchValue, error } = this.props;
        fetchProductsBySearch(searchValue);
    }

    componentDidUpdate(prevProps) {
        if (this.props.searchValue !== prevProps.searchValue) {
            fetchProductsBySearch(this.props.searchValue);
        }
    }

    render() {
        const { products, error } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        return (
            <>
            <CssBaseline />
                <Container fixed>
                    {products.length &&
                        <List products={products}/>
                    }
                </Container>
            </>
        ); 
    }
}

export default connect(mapStateToProps)(SearchResults);