import React from 'react'
import { shallow } from 'enzyme'
import PageNotFound from '../../components/PageNotFound/PageNotFound';

describe('PageNotFound component', () => {
    const pageNotFound = shallow(<PageNotFound />);

    it('renders correctly', () => {
        expect(pageNotFound.debug()).toMatchSnapshot()
    })
})
