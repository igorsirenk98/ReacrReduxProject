import { SEARCH_INPUT_CHANGE } from './action-types';

export const searchInputChange = value => ({
	type: SEARCH_INPUT_CHANGE,
	payload: {
		searchValue: value
	}
});
