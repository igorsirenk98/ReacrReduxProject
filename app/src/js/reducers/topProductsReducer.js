import {
    FETCH_TOP_PRODUCTS_START,
    FETCH_TOP_PRODUCTS_SUCCESS,
    FETCH_TOP_PRODUCTS_FAILURE
} from '../constants/action-types';

const initialState = {
    products: [],
    error: null
};

const topProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_PRODUCTS_START: {
            return {
                ...state,
                error: null
            };
        }
        case FETCH_TOP_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.payload.products
            };
        }
        case FETCH_TOP_PRODUCTS_FAILURE: {
            return {
                ...state,
                error: action.payload.error,
                products: []
            };
        }
        default:
            return state;
    }
};

export default topProductsReducer;