import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProductById } from '../actions/ProductById';

const mapStateToProps = (state, ownProps) => ({
    productId: ownProps.product.match.params.productId,
    product: state.productById.product,
    error: state.productById.error
});

class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { productId, error } = this.props;

        this.props.dispatch(fetchProductById(productId));
    }

    render() {
        const { product, error } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        return (
            <>
                {product && 
                    <div>
                        <h2>{ product.name }</h2>
                        <img src={`data:image/jpeg;base64, ${product['productProductPhoto.productPhoto.largePhoto']}`}/>
                    </div>
                }
            </>
        )
    }
}

export default connect(mapStateToProps)(ProductDetails);