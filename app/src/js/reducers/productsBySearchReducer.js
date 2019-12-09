import {
    FETCH_PRODUCTS_BY_SEARCH_START,
    FETCH_PRODUCTS_BY_SEARCH_SUCCESS,
    FETCH_PRODUCTS_BY_SEARCH_FAILURE
} from '../constants/action-types';

const initialState = {
    products: [],
    error: null
};

const productsBySearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_BY_SEARCH_START: {
            return {
                ...state,
                error: null
            };
        }
        case FETCH_PRODUCTS_BY_SEARCH_SUCCESS: {
            return {
                ...state,
                searchProducts: action.payload.products
            };
        }
        case FETCH_PRODUCTS_BY_SEARCH_FAILURE: {
            return {
                ...state,
                error: action.payload.error,
                searchProducts: []
            };
        }
        default:
            return state;
    }
}

export default productsBySearchReducer;