import * as types from '../../containers/controls/SearchInput/action-types';
import * as actions from '../../containers/controls/SearchInput/actions';

describe('searchInput actions', () => {
    it('searchInputChange should create SEARCH_INPUT_CHANGE action', () => {
        expect(actions.searchInputChange('a')).toEqual({
            type: types.SEARCH_INPUT_CHANGE,
            payload: {
                searchValue: 'a'
            },
        })
    })
})