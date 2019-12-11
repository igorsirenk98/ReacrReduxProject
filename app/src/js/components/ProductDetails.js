import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { ProductCardDetailed } from './basicComponents/ProductCardDetailed';
import Loading from './basicComponents/Loading';
import { fetchProductById } from '../actions/ProductById';

const mapStateToProps = state => ({
    product: state.productById.product,
    loading: state.productById.loading,
    error: state.productById.error
});

class ProductDetails extends Component {
    componentDidMount() {
        const { productId } = this.props.match.params;
        const { error } = this.props;

        this.props.dispatch(fetchProductById(productId));
    }

    render() {
        const { product, loading, error } = this.props;

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
                <CssBaseline />
                <Container className="containerStyles" fixed>
                    <ProductCardDetailed product={product} />
                </Container>
            </>            
        )
    }
}

export default connect(mapStateToProps)(ProductDetails);