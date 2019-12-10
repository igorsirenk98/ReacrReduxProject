import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProductCard } from './basicComponents/ProductCard';

import { fetchProductById } from '../actions/ProductById';

const mapStateToProps = state => ({
    product: state.productById.product,
    error: state.productById.error
});

class ProductDetails extends Component {
    componentDidMount() {
        const { productId } = this.props.match.params;
        const { error } = this.props;

        this.props.dispatch(fetchProductById(productId));
    }

    render() {
        const { product, error } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        return (
            <ProductCard product={product} />
        )
    }
}

export default connect(mapStateToProps)(ProductDetails);