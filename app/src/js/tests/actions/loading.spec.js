import * as types from '../../containers/controls/Loading/action-types';
import * as actions from '../../containers/controls/Loading/actions';

describe('Loading actions', () => {
    it('loadingStart should create LOADING_START action with isLoading property set to true', () => {
        expect(actions.loadingStart()).toEqual({
            type: types.LOADING_START,
            payload: {
                isLoading: true
            }
        })
    })

    it('loadingEnd should create LOADING_END action with isLoading property set to false', () => {
        expect(actions.loadingEnd()).toEqual({
            type: types.LOADING_END,
            payload: {
                isLoading: false
            }
        })
    })
})

