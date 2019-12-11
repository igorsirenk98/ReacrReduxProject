import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { List } from './basicComponents/List';
import Loading from './basicComponents/Loading';
import { fetchProductsBySearch } from '../actions/ProductsBySearch';

const mapStateToProps = state => ({
    searchedProducts: state.productsBySearch.searchedProducts,
    loading: state.productsBySearch.loading,
    error: state.productsBySearch.error
});

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
        const { searchedProducts, loading, error } = this.props;

        if (error) {
            return <div className="error"><p>Error! {error.message}</p></div>;
        } else if (loading) {
            return (
                <>
                    <CssBaseline />
                    <Container className="containerStyles" fixed>
                        <div className="loadingContainer">
                            <Loading />
                        </div>
                    </Container>
                </>
            );
        }

        return (
            <>
                {!!searchedProducts.length ? (
                    <List products={searchedProducts}/>
                ) : (
                    <Typography class="error" gutterBottom variant="h5" component="h2">
                        There is no results for "{this.props.match.params.searchInputValue}"
                    </Typography>
                )
                    
                }
            </>
        ); 
    }
}

export default connect(mapStateToProps)(SearchResults);