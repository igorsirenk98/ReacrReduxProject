import {
    FETCH_PRODUCT_DETAILS_START,
    FETCH_PRODUCT_DETAILS_RESULT
} from './action-types';

import callApi from '../../utils/callApi';

export const fetchProductDetailsStart = () => ({
    type: FETCH_PRODUCT_DETAILS_START,
});

export const fetchProductDetailsResult = (payload, error) => ({
    type: FETCH_PRODUCT_DETAILS_RESULT,
    payload,
    error
});

export function fetchProductDetails(id) {
    const url = `products/productId=${id}`;
    
    return (dispatch) => {
		return dispatch(callApi([fetchProductDetailsStart, fetchProductDetailsResult], url));
	}
}
