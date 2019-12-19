import React from 'react';
import { shallow } from 'enzyme';
import { SearchInput } from '../../../containers/controls/SearchInput/SearchInput';

describe('SearchInput component', () => {
    const props = {
        searchValue: '',
        searchInputChange: () => { },
    }

    describe('SearchInput initial', () => {
        const searchInput = shallow(<SearchInput {...props}/>);

        it('renders correctly', () => {
            expect(searchInput.debug()).toMatchSnapshot()
        })
    });
    
    describe('SearchInput with entered value', () => {
        const nextProps = {
            ...props,
            searchValue: 'a',
        }
        const searchInput = shallow(<SearchInput {...nextProps}/>);

        it('renders correctly', () => {
            expect(searchInput.debug()).toMatchSnapshot()
        })
    });
})
