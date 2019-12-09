import {
    FETCH_TOP_PRODUCTS_START,
    FETCH_TOP_PRODUCTS_SUCCESS,
    FETCH_TOP_PRODUCTS_FAILURE
} from '../constants/action-types';

export function fetchTopProducts() {
    return dispatch => {
        dispatch(fetchTopProductsStart());
        return fetch('http://localhost:2000/products/top-products')
            .then(res => res.json())
            .then(res => {
                dispatch(fetchTopProductsSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchTopProductsFailure(error)));
    };
}

export const fetchTopProductsStart = products => ({
    type: FETCH_TOP_PRODUCTS_START
});

export const fetchTopProductsSuccess = products => ({
    type: FETCH_TOP_PRODUCTS_SUCCESS,
    payload: {
        products
    }
});

export const fetchTopProductsFailure = error => ({
    type: FETCH_TOP_PRODUCTS_FAILURE,
    payload: {
        error
    }
});