import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { fetchTopProducts } from '../actions/TopProducts';
import { List } from './basicComponents/List';

const containerStyles = {
    'maxWidth': '1024px'
};

const mapStateToProps = state => ({
    products: state.topProducts.products,
    error: state.topProducts.error
});

class TopProducts extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTopProducts());
    }

    render() {
        const { products, error } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        return (
            <>
                <CssBaseline />
                <Container fixed style={containerStyles}>
                    {products.length && 
                        <List products={products}/>
                    }
                </Container>
            </>
        ); 
    }
}

export default connect(mapStateToProps)(TopProducts);