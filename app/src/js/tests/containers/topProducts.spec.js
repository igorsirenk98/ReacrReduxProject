import React from 'react';
import { shallow } from 'enzyme';
import { TopProducts } from '../../containers/TopProducts/TopProducts';

describe('TopProducts container', () => {
    const props = {
        payload: {
            products: [{name: 'bike1'}, {name: 'bike2'}]
        },
        isLoading: false,
        error: false,
        fetchTopProducts: () => { },
    }

    describe('TopProducts initial', () => {
        const topProducts = shallow(<TopProducts {...props} />);

        it('renders correctly', () => {
            expect(topProducts.debug()).toMatchSnapshot();
        })
    })

    describe('TopProducts isLoading', () => {
        const nextProps = {
            ...props,
            payload: {
                products: [{name: 'bike1'}, {name: 'bike2'}],
            },
            isLoading: true,
        }

        const topProducts = shallow(<TopProducts {...nextProps} />);

        it('renders correctly', () => {
            expect(topProducts.debug()).toMatchSnapshot();
        })
    })

    describe('TopProducts error', () => {
        const nextProps = {
            ...props,
            payload: {
                error: {
                    message: 'error',
                }
            },
            error: true,
        }

        const topProducts = shallow(<TopProducts {...nextProps} />);

        it('renders correctly', () => {
            expect(topProducts.debug()).toMatchSnapshot();
        })
    })

    describe('TopProducts with data', () => {
        const nextProps = {
            ...props,
            payload: {
                products: [{name: 'bike1'}, {name: 'bike2'}],
            }
        }

        const topProducts = shallow(<TopProducts {...nextProps} />);

        it('renders correctly', () => {
            expect(topProducts.debug()).toMatchSnapshot();
        })
    })
})

