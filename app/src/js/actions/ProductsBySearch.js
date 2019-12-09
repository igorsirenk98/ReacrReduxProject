import {
    FETCH_PRODUCTS_BY_SEARCH_START,
    FETCH_PRODUCTS_BY_SEARCH_SUCCESS,
    FETCH_PRODUCTS_BY_SEARCH_FAILURE
} from '../constants/action-types';

export function fetchProductsBySearch(searchValue) {
    return dispatch => {
        dispatch(fetchProductsBySearchStart());
        return fetch(`http://localhost:2000/products/search=${searchValue}`)
            .then(res => res.json())
            .then(res => {
                dispatch(fetchProductsBySearchSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchProductsBySearchFailure(error)));
    };
}

export const fetchProductsBySearchStart = products => ({
    type: FETCH_PRODUCTS_BY_SEARCH_START
});

export const fetchProductsBySearchSuccess = products => ({
    type: FETCH_PRODUCTS_BY_SEARCH_SUCCESS,
    payload: {
        products
    }
});

export const fetchProductsBySearchFailure = error => ({
    type: FETCH_PRODUCTS_BY_SEARCH_FAILURE,
    payload: {
        error
    }
});