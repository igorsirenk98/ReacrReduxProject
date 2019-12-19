import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetails } from '../../containers/ProductDetails/ProductDetails';

describe('ProductDetails container', () => {
    const props = {
        payload: {
            product: {}
        },
        match: {
            params: 1
        },
        isLoading: false,
        error: false,
        fetchProductDetails: () => { },
    }

    describe('ProductDetails initial', () => {
        const productDetails = shallow(<ProductDetails {...props} />);

        it('renders correctly', () => {
            expect(productDetails.debug()).toMatchSnapshot();
        })
    })

    describe('ProductDetails isLoading', () => {
        const nextProps = {
            ...props,
            payload: {
                product: {
                    ...props.product,
                }
            },
            isLoading: true,
        }

        const productDetails = shallow(<ProductDetails {...nextProps} />);

        it('renders correctly', () => {
            expect(productDetails.debug()).toMatchSnapshot();
        })
    })

    describe('ProductDetails error', () => {
        const nextProps = {
            ...props,
            payload: {
                error: {
                    message: 'error',
                }
            },
            error: true,
        }

        const productDetails = shallow(<ProductDetails {...nextProps} />);

        it('renders correctly', () => {
            expect(productDetails.debug()).toMatchSnapshot();
        })
    })

    describe('ProductDetails with data', () => {
        const nextProps = {
            ...props,
            payload: {
                product: {}
            }
        }

        const productDetails = shallow(<ProductDetails {...nextProps} />);

        it('renders correctly', () => {
            expect(productDetails.debug()).toMatchSnapshot();
        })
    })
})

