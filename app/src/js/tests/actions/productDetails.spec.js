import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { LOADING_START, LOADING_END } from '../../containers/controls/Loading/action-types';
import * as types from '../../containers/ProductDetails/action-types';
import * as actions from '../../containers/ProductDetails/actions';
import { localhost, port } from '../../constants/serverConfig';

import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ProductDetails sync actions', () => {
    it('fetchProductDetailsStart should create FETCH_PRODUCT_DETAILS_START action', () => {
        expect(actions.fetchProductDetailsStart()).toEqual({
            type: types.FETCH_PRODUCT_DETAILS_START
        })
    })

    it('fetchProductDetailsResult should create action with received data', () => {
        expect(actions.fetchProductDetailsResult({
            product: {
                name: 'bike'
            }
        },
            false
        )).toEqual({
            type: types.FETCH_PRODUCT_DETAILS_RESULT,
            payload: {
                product: {
                    name: 'bike'
                }
            },
            error: false
        })
    })

    it('fetchProductDetailsResult should create action with received error', () => {
        expect(actions.fetchProductDetailsResult({
            error: {
                message: 'error'
            }
        },
            true
        )).toEqual({
            type: types.FETCH_PRODUCT_DETAILS_RESULT,
            payload: {
                error: {
                    message: 'error'
                }
            },
            error: true
        })
    })
})

describe('ProductDetails async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    })

    it('fetchProductDetails should dispatch callApi function', () => {
        fetchMock.getOnce(`${localhost}:${port}/products/productId=965`, {
            headers: { 'content-type': 'application/json' },
            body: {
                product: {
                    productId: 965,
                    name: 'bike'
                }
            },
            status: 200
        })

        const expectedActions = [
            {
                type: types.FETCH_PRODUCT_DETAILS_START
            },
            {
                type: LOADING_START,
                payload: {
                    isLoading: true
                }
            },
            {
                type: types.FETCH_PRODUCT_DETAILS_RESULT,
                payload: {
                    product: {
                        productId: 965,
                        name: 'bike'
                    }
                },
                error: false
            },
            {
                type: LOADING_END,
                payload: {
                    isLoading: false
                }
            },
        ];

        const store = mockStore({});

        return store.dispatch(actions.fetchProductDetails(965)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    it(`fetchProductDetails should dispatch callApi function 
    and return error message if error`, () => {
            fetchMock.getOnce(`${localhost}:${port}/products/productId=965`, {
                headers: { 'content-type': 'application/json' },
                throws: {
                    error: {
                        message: 'error'
                    }
                },
                status: 404
            })

            const expectedActions = [
                {
                    type: types.FETCH_PRODUCT_DETAILS_START
                },
                {
                    type: LOADING_START,
                    payload: {
                        isLoading: true
                    }
                },
                {
                    type: types.FETCH_PRODUCT_DETAILS_RESULT,
                    payload: {
                        error: {
                            message: 'error'
                        }
                    },
                    error: true
                },
                {
                    type: LOADING_END,
                    payload: {
                        isLoading: false
                    }
                },
            ];

            const store = mockStore({});

            return store.dispatch(actions.fetchProductDetails(965)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })
})
