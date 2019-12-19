import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from '../../containers/SearchResults/SearchResults';

describe('SearchResults container', () => {
    const props = {
        payload: {
            products: [{name: 'bike1'}, {name: 'bike2'}]
        },
        match: {
            params: 1
        },
        isLoading: false,
        error: false,
        fetchProductsBySearch: () => { },
    }

    describe('SearchResults initial', () => {
        const searchResults = shallow(<SearchResults {...props} />);

        it('renders correctly', () => {
            expect(searchResults.debug()).toMatchSnapshot();
        })
    })

    describe('SearchResults isLoading', () => {
        const nextProps = {
            ...props,
            payload: {
                products: [{name: 'bike1'}, {name: 'bike2'}],
            },
            isLoading: true,
        }

        const searchResults = shallow(<SearchResults {...nextProps} />);

        it('renders correctly', () => {
            expect(searchResults.debug()).toMatchSnapshot();
        })
    })

    describe('SearchResults error', () => {
        const nextProps = {
            ...props,
            payload: {
                error: {
                    message: 'error',
                }
            },
            error: true,
        }

        const searchResults = shallow(<SearchResults {...nextProps} />);

        it('renders correctly', () => {
            expect(searchResults.debug()).toMatchSnapshot();
        })
    })

    describe('SearchResults with data', () => {
        const nextProps = {
            ...props,
            payload: {
                products: [{name: 'bike1'}, {name: 'bike2'}],
            }
        }

        const searchResults = shallow(<SearchResults {...nextProps} />);

        it('renders correctly', () => {
            expect(searchResults.debug()).toMatchSnapshot();
        })
    })
})

