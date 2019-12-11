import React from 'react';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { ProductCard } from './ProductCard';

export const List = props => {
    const products = props.products;

    return (
        <>
            <CssBaseline />
            <Container className="containerStyles" fixed>
                <ul className="list">
                    {products.map(product => (
                        <ProductCard key={product.productId} product={product} />
                    ))}
                </ul>
            </Container>
        </>
    )
}
