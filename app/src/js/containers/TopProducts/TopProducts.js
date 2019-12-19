import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import List from '../../components/controls/List';
import Loading from '../controls/Loading/Loading';
import ErrorMessage from '../../components/controls/ErrorMessage';

import { fetchTopProducts } from './actions';

const mapStateToProps = state => ({
    payload: state.topProducts.payload,
    isLoading: state.loadingAnimation.payload.isLoading,
    error: state.topProducts.error
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchTopProducts
    }, dispatch)
};

export class TopProducts extends Component {
    componentDidMount() {
        this.props.fetchTopProducts();
    }

    render() {
        const { payload, isLoading, error } = this.props;
        const { products } = payload;

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

        return (
            <>
                <>
                    <Typography className="notification" gutterBottom variant="h3" component="h2">
                        Top products
                    </Typography>
                    <List products={products} />
                </>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProducts);