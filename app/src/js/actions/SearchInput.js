import {
    SEARCH_INPUT_CHANGE
} from '../constants/action-types';

export const searchInputChange = value => ({
    type: SEARCH_INPUT_CHANGE,
        payload: {
            searchInputValue: value
        }
});