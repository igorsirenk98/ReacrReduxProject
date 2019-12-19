import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { LOADING_START, LOADING_END } from '../../containers/controls/Loading/action-types';
import * as types from '../../containers/TopProducts/action-types';
import * as actions from '../../containers/TopProducts/actions';

import { localhost, port } from '../../constants/serverConfig';

import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('TopProducts actions', () => {
    it('fetchTopProductsStart should create FETCH_TOP_PRODUCTS_START action', () => {
        expect(actions.fetchTopProductsStart()).toEqual({
            type: types.FETCH_TOP_PRODUCTS_START
        })
    })

    it('fetchTopProductsResult should create action with received data', () => {
        expect(actions.fetchTopProductsResult({
            products: [{}, {}, {}]
        },
            false
        )).toEqual({
            type: types.FETCH_TOP_PRODUCTS_RESULT,
            payload: {
                products: [{}, {}, {}]
            },
            error: false
        })
    })

    it('fetchTopProductsResult should create action with received error', () => {
        expect(actions.fetchTopProductsResult({
            error: {
                message: 'error'
            }
        },
            true
        )).toEqual({
            type: types.FETCH_TOP_PRODUCTS_RESULT,
            payload: {
                error: {
                    message: 'error'
                }
            },
            error: true
        })
    })
})

describe('TopProducts async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    })

    it(`fetchTopProducts should dispatch callApi function 
    and get top selling products`, () => {
            fetchMock.getOnce(`${localhost}:${port}/products/top-products`, {
                headers: { 'content-type': 'application/json' },
                body: {
                    products: [
                        {
                            name: 'bike one',
                            totalAmountSold: 3000
                        },
                        {
                            name: 'bike two',
                            totalAmountSold: 2900
                        },
                        {
                            name: 'road',
                            totalAmountSold: 2860
                        }
                    ]
                },
                status: 200
            })

            const expectedActions = [
                {
                    type: types.FETCH_TOP_PRODUCTS_START
                },
                {
                    type: LOADING_START,
                    payload: {
                        isLoading: true
                    }
                },
                {
                    type: types.FETCH_TOP_PRODUCTS_RESULT,
                    payload: {
                        products: [
                            {
                                name: 'bike one',
                                totalAmountSold: 3000
                            },
                            {
                                name: 'bike two',
                                totalAmountSold: 2900
                            },
                            {
                                name: 'road',
                                totalAmountSold: 2860
                            }
                        ]
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

            return store.dispatch(actions.fetchTopProducts()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })

    it(`fetchTopProducts should dispatch callApi function 
    and return error message if error`, () => {
            fetchMock.getOnce(`${localhost}:${port}/products/top-products`, {
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
                    type: types.FETCH_TOP_PRODUCTS_START
                },
                {
                    type: LOADING_START,
                    payload: {
                        isLoading: true
                    }
                },
                {
                    type: types.FETCH_TOP_PRODUCTS_RESULT,
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

            return store.dispatch(actions.fetchTopProducts()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })
})

