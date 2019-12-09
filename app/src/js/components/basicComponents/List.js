import React from 'react';
import { Link } from 'react-router-dom';

export const List = props => {
    const products = props.products;

    return (
        <ul>
            {products.map(product => (
                <Link
                    key={product.productId}
                    to={{
                        pathname: `/products/productId=${product.productId}`,
                        productId: product.productId
                    }}
                >
                    {product.name}
                    <img src={`data:image/jpeg;base64, ${product['productProductPhoto.productPhoto.largePhoto']}`}/>
                </Link>
            ))}
        </ul>
    )
}
