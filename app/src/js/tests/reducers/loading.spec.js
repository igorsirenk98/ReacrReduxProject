import * as types from '../../containers/controls/Loading/action-types';
import reducer from '../../containers/controls/Loading/reducer';

const initialState = {
    payload: {
		isLoading: false
	}
};

describe('Loading reducer', () => {
    it('should handle LOADING_START', () => {
        expect(
            reducer(initialState, {
                type: types.LOADING_START,
                payload: {
                    isLoading: true
                }
            })
        ).toEqual({
            ...initialState,
            payload: {
                isLoading: true
            }
        })
    })

    it('should handle LOADING_END', () => {
        expect(
            reducer(initialState, {
                type: types.LOADING_END,
                payload: {
                    isLoading: false
                }
            })
        ).toEqual({
            ...initialState,
            payload: {
                isLoading: false
            }
        })
    })
})
