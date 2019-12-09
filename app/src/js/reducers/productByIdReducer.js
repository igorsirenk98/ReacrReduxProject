import {
    FETCH_PRODUCT_BY_ID_START,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE
} from '../constants/action-types';

const initialState = {
    product: null,
    error: null
};

const productByIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_BY_ID_START: {
            return {
                ...state,
                error: null
            }
        }
        case FETCH_PRODUCT_BY_ID_SUCCESS: {
            return {
                ...state,
                product: action.payload.product
            }
        }
        case FETCH_PRODUCT_BY_ID_FAILURE: {
            return {
                ...state,
                error: action.payload.error,
                product: null
            };
        }
        default:
            return state;
    }
}

export default productByIdReducer;