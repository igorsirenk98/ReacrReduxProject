import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'

const mapStateToProps = state => ({
    products: state.products.products,
    error: state.products.error
});

class List extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        const { products, error } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        return (
            <ul>
                {products.map(item => (
                    <li key={item.productId}>
                        {item.name}
                        <img src={`data:image/jpeg;base64, ${item['productProductPhoto.productPhoto.largePhoto']}`}/>
                    </li>
                ))}
            </ul>
        ); 
    }
}

export default connect(mapStateToProps)(List);