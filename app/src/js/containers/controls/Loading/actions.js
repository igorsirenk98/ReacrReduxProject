import { LOADING_START, LOADING_END } from './action-types';

export const loadingStart = () => ({
	type: LOADING_START,
	payload: {
		isLoading: true
	},
});

export const loadingEnd = () => ({
	type: LOADING_END,
	payload: {
		isLoading: false
	},
});
