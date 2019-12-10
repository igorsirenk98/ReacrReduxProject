import React from 'react';
import { Link } from 'react-router-dom';

import { ProductCard } from './ProductCard';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const listStyles = {
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around'
};

export const List = props => {
    const products = props.products;

    return (
        <ul style={listStyles}>
            {products.map(product => (
                <>
                    <CssBaseline />
                    <Container fixed>
                        <ProductCard key={product.productId} product={product} />
                    </Container>
                </>
            ))}
        </ul>
    )
}
