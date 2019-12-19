import { LOADING_START, LOADING_END } from './action-types';

const initialState = {
	payload: {
		isLoading: false
	}
};

const loading = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_START: {
			return {
				...state,
				payload: action.payload
			};
        }
        
        case LOADING_END: {
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

export default loading;
