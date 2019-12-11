import {
    FETCH_TOP_PRODUCTS_START,
    FETCH_TOP_PRODUCTS_SUCCESS,
    FETCH_TOP_PRODUCTS_FAILURE
} from '../constants/action-types';

const initialState = {
    products: [],
    loading: false,
    error: null
};

const topProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_PRODUCTS_START: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case FETCH_TOP_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.payload.products,
                loading: false
            };
        }
        case FETCH_TOP_PRODUCTS_FAILURE: {
            return {
                ...state,
                products: [],
                loading: false,
                error: action.payload.error
            };
        }
        default:
            return state;
    }
};

export default topProductsReducer;