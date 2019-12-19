import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ProductCard from './ProductCard';

const List = (props) => {
    const { products } = props;

    return (
        <>
            <CssBaseline />
            <Container className="container" fixed>
                <ul className="products__list">
                    {products.map((product) => (
                        <ProductCard key={product.productId} product={product} />
                    ))}
                </ul>
            </Container>
        </>
    );
};

export default List;
