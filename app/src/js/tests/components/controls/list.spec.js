import React from 'react'
import { shallow } from 'enzyme'
import List from '../../../components/controls/List';

describe('List component', () => {
    const list = shallow(<List products={[{productId: 1}, {productId: 2}]} />);

    it('renders correctly', () => {
        expect(list.debug()).toMatchSnapshot()
    })
})
