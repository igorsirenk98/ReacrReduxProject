import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import List from '../../components/controls/List';
import ErrorMessage from '../../components/controls/ErrorMessage';
import Loading from '../controls/Loading/Loading';

import { fetchProductsBySearch } from './actions';

const mapStateToProps = state => ({
    payload: state.productsBySearch.payload,
    isLoading: state.loadingAnimation.payload.isLoading,
    error: state.productsBySearch.error,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchProductsBySearch
    }, dispatch);
};

export class SearchResults extends Component {
    componentDidUpdate(prevProps) {
        const { searchInputValue: currentSearchInputValue } = this.props.match.params;
        const { searchInputValue: prevSearchInputValue } = prevProps.match.params;

        if (currentSearchInputValue !== prevSearchInputValue) {
            this.props.fetchProductsBySearch(currentSearchInputValue);
        }
    }

    componentDidMount() {
        const { searchInputValue } = this.props.match.params;

        this.props.fetchProductsBySearch(searchInputValue);
    }

    render() {
        const {
            payload,
            isLoading,
            error
        } = this.props;
        const { products } = payload;
        const { searchInputValue } = this.props.match.params;

        if (error) {
            return <ErrorMessage error={payload} />;
        } else if (isLoading) {
            return (
                <>
                    <CssBaseline />
                    <Container className="container" fixed>
                        <div className="loading-container">
                            <Loading />
                        </div>
                    </Container>
                </>
            );
        }

        if (!!products.length) {
            return (
                <>
                    <Typography className="notification" gutterBottom variant="h3" component="h2">
                        Results for "{decodeURIComponent(searchInputValue)}"
                    </Typography>
                    <List products={products} />
                </>
            );
        } else {
            return (
                <>
                    <CssBaseline />
                    <Container className="container" fixed>
                        <Typography className="notification" gutterBottom variant="h3" component="h2">
                            There is no results for "{decodeURIComponent(searchInputValue)}"
                    </Typography>
                    </Container>
                </>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);