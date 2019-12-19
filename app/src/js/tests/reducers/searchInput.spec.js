import * as types from '../../containers/controls/SearchInput/action-types';
import reducer from '../../containers/controls/SearchInput/reducer';

const initialState = {
    payload: {
        searchValue: ''
    }
};

describe('SearchInput reducer', () => {
    it('should handle SEARCH_INPUT_CHANGE', () => {
        expect(
            reducer(initialState, {
                type: types.SEARCH_INPUT_CHANGE,
                payload: {
                    searchValue: 'a'
                }
            })
        ).toEqual({
            ...initialState,
            payload: {
                searchValue: 'a'
            }
        })

        expect(
            reducer({
                ...initialState,
                payload: {
                    searchValue: 'a'
                }
            }, {
                type: types.SEARCH_INPUT_CHANGE,
                payload: {
                    searchValue: 'ab'
                }
            })
        ).toEqual({
            ...initialState,
            payload: {
                searchValue: 'ab'
            }
        })

        expect(
            reducer({
                ...initialState,
                payload: {
                    searchValue: 'abc'
                }
            }, {
                type: types.SEARCH_INPUT_CHANGE,
                payload: {
                    searchValue: 'ab'
                }
            })
        ).toEqual({
            ...initialState,
            payload: {
                searchValue: 'ab'
            }
        })
    })
})