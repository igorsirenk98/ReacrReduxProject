import {
	FETCH_PRODUCTS_BY_SEARCH_START,
	FETCH_PRODUCTS_BY_SEARCH_RESULT
} from './action-types';

const initialState = {
	payload: {
		products: []
	},
	error: false
};

const searchResults = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS_BY_SEARCH_START: {
			return {
				...state,
				error: false,
			};
		}
		case FETCH_PRODUCTS_BY_SEARCH_RESULT: {
			return {
				...state,
				payload: action.payload,
				error: action.error
			};
		}
		default:
			return state;
	}
};

export default searchResults;
