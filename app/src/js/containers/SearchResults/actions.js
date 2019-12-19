import {
	FETCH_PRODUCTS_BY_SEARCH_START,
	FETCH_PRODUCTS_BY_SEARCH_RESULT
} from './action-types';

import callApi from '../../utils/callApi';

export const fetchProductsBySearchStart = () => ({
	type: FETCH_PRODUCTS_BY_SEARCH_START,
});

export const fetchProductsBySearchResult = (payload, error) => ({
	type: FETCH_PRODUCTS_BY_SEARCH_RESULT,
	payload,
	error
});

export function fetchProductsBySearch(searchValue) {
	const url = `products/search=${searchValue}`;

	return (dispatch) => {
		return dispatch(callApi([fetchProductsBySearchStart, fetchProductsBySearchResult], url));
	}
}