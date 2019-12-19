import {
	FETCH_TOP_PRODUCTS_START,
	FETCH_TOP_PRODUCTS_RESULT
} from './action-types';

const initialState = {
	payload: {
		products: []
	},
	error: false
};

const topProducts = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOP_PRODUCTS_START: {
			return {
				...state,
				error: false
			};
		}
		case FETCH_TOP_PRODUCTS_RESULT: {
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

export default topProducts;
