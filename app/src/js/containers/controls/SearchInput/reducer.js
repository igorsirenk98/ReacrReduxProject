import { SEARCH_INPUT_CHANGE } from './action-types';

const initialState = {
	payload: {
		searchValue: ''
	}
};

const searchInput = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_INPUT_CHANGE: {
			return {
				...state,
				payload: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default searchInput;
