import React from 'react'
import { shallow } from 'enzyme'
import ProductDetailsCard from '../../components/ProductDetailsCard/ProductDetailsCard';

describe('ProductDetailsCard component', () => {
    const productDetailsCard = shallow(<ProductDetailsCard product={{
        productId: 1,
        name: 'bike',
        productNumber: 2,
        color: 'red',
        weight: 75,
        weightUnitMeasureCode: 'kg',
        size: 24,
        sizeUnitMeasureCode: 'cm',
        productSubcategory: {
            name: 'road'
        },
        listPrice: 100,
        description: 'Something...'
    }} />);

    it('renders correctly', () => {
        expect(productDetailsCard.debug()).toMatchSnapshot()
    })
})
