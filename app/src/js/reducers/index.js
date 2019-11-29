import { GET_DATA } from '../constants/action-types';
import data from '../../data';

const initialState = {
    data
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_DATA': {
            return Object.assign({}, state, {
                data: action.payload
            });
        }
        case 'ADD_BICYCLE': {
            return Object.assign({}, state, {
                data: [...state.data, action.payload]
            });
        }
        default:
            return state;
    }
};

export default rootReducer;