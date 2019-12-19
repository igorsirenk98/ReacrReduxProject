import * as types from '../../containers/ProductDetails/action-types';
import reducer from '../../containers/ProductDetails/reducer';

const initialState = {
    payload: {
        product: {}
    },
    error: false
};

describe('ProductDetails reducer', () => {
    it('should handle FETCH_PRODUCT_DETAILS_START', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_PRODUCT_DETAILS_START
            })
        ).toEqual({
            ...initialState,
            error: false
        })
    })

    it('should handle FETCH_PRODUCT_DETAILS_RESULT with received data', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_PRODUCT_DETAILS_RESULT,
                payload: {
                    product: {
                        name: 'name'
                    }
                },
                error: false
            })
        ).toEqual({
            ...initialState,
            payload: {
                product: {
                    name: 'name'
                }
            },
            error: false
        })
    })

    it('should handle FETCH_PRODUCT_DETAILS_RESULT with received error', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_PRODUCT_DETAILS_RESULT,
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