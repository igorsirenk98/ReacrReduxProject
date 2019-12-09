import React from 'react';
import { Header } from '../components/basicComponents/Header';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = props => (
    <>
        <Header />
        <ProductDetails product={props}/>
    </>
);

export default ProductDetailsPage;