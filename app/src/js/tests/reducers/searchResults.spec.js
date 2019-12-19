import * as types from '../../containers/SearchResults/action-types';
import reducer from '../../containers/SearchResults/reducer';

const initialState = {
    payload: {
        products: []
    },
    error: false
};

describe('SearchResults reducer', () => {
    it('should handle FETCH_PRODUCTS_BY_SEARCH_START', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_PRODUCTS_BY_SEARCH_START
            })
        ).toEqual({
            ...initialState,
            error: false
        })
    })

    it('should handle FETCH_PRODUCTS_BY_SEARCH_RESULT with received data', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_PRODUCTS_BY_SEARCH_RESULT,
                payload: {
                    products: [{},{}]
                },
                error: false
            })
        ).toEqual({
            ...initialState,
            payload: {
                products: [{},{}]
            },
            error: false
        })
    })

    it('should handle FETCH_PRODUCTS_BY_SEARCH_RESULT with received error', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_PRODUCTS_BY_SEARCH_RESULT,
                payload: {
                    error: {
                        message: 'error'
                    }
                },
                error: true
            })
        ).toEqual({
            ...initialState,
            payload: {
                error: {
                    message: 'error'
                }
            },
            error: true
        })
    })
})