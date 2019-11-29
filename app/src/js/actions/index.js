import { GET_DATA, ADD_BICYCLE } from '../constants/action-types';

export function getData(payload) {
    return {
        type: GET_DATA,
        payload
    };
}

export function addBicycle(payload) {
    return {
        type: ADD_BICYCLE,
        payload
    };
}