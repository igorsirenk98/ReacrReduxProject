import {
    SEARCH_INPUT_CHANGE
} from '../constants/action-types';

const initialState = {
    searchInputValue: ''
};

const searchInputChangeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_INPUT_CHANGE: {
            return {
                ...state,
                searchInputValue: action.payload.searchInputValue
            };
        }
        default: {
            return state;
        }
    }
}

export default searchInputChangeReducer;