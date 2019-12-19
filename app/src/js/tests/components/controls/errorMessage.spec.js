import React from 'react'
import { shallow } from 'enzyme'
import ErrorMessage from '../../../components/controls/ErrorMessage';

describe('ErrorMessage component', () => {
    const errorMessage = shallow(<ErrorMessage error={{ message: 'error' }} />);

    it('renders correctly', () => {
        expect(errorMessage.debug()).toMatchSnapshot()
    })
})
