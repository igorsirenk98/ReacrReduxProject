import {
	FETCH_TOP_PRODUCTS_START,
	FETCH_TOP_PRODUCTS_RESULT
} from './action-types';

import callApi from '../../utils/callApi';

export const fetchTopProductsStart = () => ({
	type: FETCH_TOP_PRODUCTS_START,
});

export const fetchTopProductsResult = (payload, error) => ({
	type: FETCH_TOP_PRODUCTS_RESULT,
	payload,
	error
});

export function fetchTopProducts() {
	const url = `products/top-products`;

	return (dispatch) => {
		return dispatch(callApi([fetchTopProductsStart, fetchTopProductsResult], url));
	}
}
