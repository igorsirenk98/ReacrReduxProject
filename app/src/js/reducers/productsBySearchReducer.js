import {
    FETCH_PRODUCTS_BY_SEARCH_START,
    FETCH_PRODUCTS_BY_SEARCH_SUCCESS,
    FETCH_PRODUCTS_BY_SEARCH_FAILURE
} from '../constants/action-types';

const initialState = {
    searchedProducts: [],
    loading: false,
    error: null
};

const productsBySearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_BY_SEARCH_START: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case FETCH_PRODUCTS_BY_SEARCH_SUCCESS: {
            return {
                ...state,
                searchedProducts: action.payload.products,
                loading: false
            };
        }
        case FETCH_PRODUCTS_BY_SEARCH_FAILURE: {
            return {
                ...state,
                searchedProducts: [],
                loading: false,
                error: action.payload.error
            };
        }
        default:
            return state;
    }
}

export default productsBySearchReducer;