import React from 'react'
import { shallow } from 'enzyme'
import ProductCard from '../../../components/controls/ProductCard';

describe('ProductCard component', () => {
    const productCard = shallow(<ProductCard product={{
        productId: 1,
        name: 'bike',
        productSubcategory: {
            name: 'road'
        },
        listPrice: 100
    }} />);

    it('renders correctly', () => {
        expect(productCard.debug()).toMatchSnapshot()
    })
})
