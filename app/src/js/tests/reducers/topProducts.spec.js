import * as types from '../../containers/TopProducts/action-types';
import reducer from '../../containers/TopProducts/reducer';

const initialState = {
    payload: {
        products: []
    },
    error: false
};

describe('TopProducts reducer', () => {
    it('should handle FETCH_TOP_PRODUCTS_START', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_TOP_PRODUCTS_START
            })
        ).toEqual({
            ...initialState,
            error: false
        })
    })

    it('should handle FETCH_TOP_PRODUCTS_RESULT with received data', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_TOP_PRODUCTS_RESULT,
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

    it('should handle FETCH_TOP_PRODUCTS_RESULT with received error', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_TOP_PRODUCTS_RESULT,
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
