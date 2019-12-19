import {
	FETCH_PRODUCT_DETAILS_START,
	FETCH_PRODUCT_DETAILS_RESULT
} from './action-types';

const initialState = {
	payload: {
		product: {}
	},
	error: false
};

const productDetails = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_DETAILS_START: {
			return {
				...state,
				error: false
			};
		}
		case FETCH_PRODUCT_DETAILS_RESULT: {
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

export default productDetails;
