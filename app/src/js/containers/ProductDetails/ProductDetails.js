import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ProductCardDetailed from '../../components/ProductDetailsCard/ProductDetailsCard';
import Loading from '../controls/Loading/Loading';
import ErrorMessage from '../../components/controls/ErrorMessage';

import { fetchProductDetails } from './actions';

const mapStateToProps = state => ({
    payload: state.productDetails.payload,
    isLoading: state.loadingAnimation.payload.isLoading,
    error: state.productDetails.error,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchProductDetails
    }, dispatch);
};

export class ProductDetails extends Component {
    componentDidMount() {
        const { productId } = this.props.match.params;

        this.props.fetchProductDetails(productId);
    }

    render() {
        const { payload, isLoading, error } = this.props;
        const { product } = payload;

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
                <CssBaseline />
                <Container className="container" fixed>
                    <ProductCardDetailed product={product} />
                </Container>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
