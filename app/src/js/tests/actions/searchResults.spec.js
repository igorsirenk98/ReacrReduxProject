import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { LOADING_START, LOADING_END } from '../../containers/controls/Loading/action-types';
import * as types from '../../containers/SearchResults/action-types';
import * as actions from '../../containers/SearchResults/actions';
import { localhost, port } from '../../constants/serverConfig';

import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('searchResults actions', () => {
    it('fetchProductsBySearchStart should create FETCH_PRODUCTS_BY_SEARCH_START action', () => {
        expect(actions.fetchProductsBySearchStart()).toEqual({
            type: types.FETCH_PRODUCTS_BY_SEARCH_START
        })
    })

    it('fetchProductsBySearchResult should create action with received data', () => {
        expect(actions.fetchProductsBySearchResult({
            products: [{}, {}, {}]
        },
            false
        )).toEqual({
            type: types.FETCH_PRODUCTS_BY_SEARCH_RESULT,
            payload: {
                products: [{}, {}, {}]
            },
            error: false
        })
    })

    it('fetchProductsBySearchResult should create action with received error', () => {
        expect(actions.fetchProductsBySearchResult({
            error: {
                message: 'error'
            }
        },
            true
        )).toEqual({
            type: types.FETCH_PRODUCTS_BY_SEARCH_RESULT,
            payload: {
                error: {
                    message: 'error'
                }
            },
            error: true
        })
    })
})

describe('SearchResults async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    })

    it(`fetchProductsBySearch should dispatch callApi function
    and get products where substring was found in name or description`, () => {
            fetchMock.getOnce(`${localhost}:${port}/products/search=bike`, {
                headers: { 'content-type': 'application/json' },
                body: {
                    products: [
                        {
                            name: 'bike one',
                            description: 'very fast'
                        },
                        {
                            name: 'bike two',
                            description: 'very slow'
                        },
                        {
                            name: 'road',
                            description: 'nice bike'
                        }
                    ]
                },
                status: 200
            })

            const expectedActions = [
                {
                    type: types.FETCH_PRODUCTS_BY_SEARCH_START
                },
                {
                    type: LOADING_START,
                    payload: {
                        isLoading: true
                    }
                },
                {
                    type: types.FETCH_PRODUCTS_BY_SEARCH_RESULT,
                    payload: {
                        products: [
                            {
                                name: 'bike one',
                                description: 'very fast'
                            },
                            {
                                name: 'bike two',
                                description: 'very slow'
                            },
                            {
                                name: 'road',
                                description: 'nice bike'
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

            return store.dispatch(actions.fetchProductsBySearch('bike')).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })

    it(`fetchProductsBySearch should dispatch callApi function 
    and return error message if error`, () => {
            fetchMock.getOnce(`${localhost}:${port}/products/search=bike`, {
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
                    type: types.FETCH_PRODUCTS_BY_SEARCH_START
                },
                {
                    type: LOADING_START,
                    payload: {
                        isLoading: true
                    }
                },
                {
                    type: types.FETCH_PRODUCTS_BY_SEARCH_RESULT,
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

            return store.dispatch(actions.fetchProductsBySearch('bike')).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })
})