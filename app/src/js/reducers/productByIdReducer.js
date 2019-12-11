import {
    FETCH_PRODUCT_BY_ID_START,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE
} from '../constants/action-types';

const initialState = {
    product: null,
    loading: false,
    error: null
};

const productByIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_BY_ID_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case FETCH_PRODUCT_BY_ID_SUCCESS: {
            return {
                ...state,
                product: action.payload.product,
                loading: false
            }
        }
        case FETCH_PRODUCT_BY_ID_FAILURE: {
            return {
                ...state,
                product: null,
                loading: false,
                error: action.payload.error
            };
        }
        default:
            return state;
    }
}

export default productByIdReducer;