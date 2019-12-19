import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../components/controls/Header';

describe('Header component', () => {
    const header = shallow(<Header />);

    it('renders correctly', () => {
        expect(header.debug()).toMatchSnapshot()
    })
})
