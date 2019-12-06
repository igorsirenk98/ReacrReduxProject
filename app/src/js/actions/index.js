import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/action-types';

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsStart());
        return fetch('http://localhost:2000/products/top-products')
            .then(res => res.json())
            .then(res => {
                dispatch(fetchProductsSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchProductsStart = products => ({
    type: FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
        products
    }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
        error
    }
});