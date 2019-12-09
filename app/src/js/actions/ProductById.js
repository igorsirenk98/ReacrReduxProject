import {
    FETCH_PRODUCT_BY_ID_START,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_FAILURE
} from '../constants/action-types';

export function fetchProductById(id) {
    return dispatch => {
        dispatch(fetchProductByIdStart());
        return fetch(`http://localhost:2000/products/productId=${id}`)
            .then(res => res.json())
            .then(res => {
                dispatch(fetchProductByIdSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchProductByIdFailure(error)));
    }
}

export const fetchProductByIdStart = product => {
    return { type: FETCH_PRODUCT_BY_ID_START }
};

export const fetchProductByIdSuccess = product => ({
    type: FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: {
        product
    }
});

export const fetchProductByIdFailure = error => ({
    type: FETCH_PRODUCT_BY_ID_FAILURE,
    payload: {
        error
    }
});