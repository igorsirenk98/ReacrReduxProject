import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from '../../../containers/controls/Loading/Loading';

describe('Loading component', () => {
    const props = {
        isLoading: false,
        loadingStart: () => { },
        loadingEnd: () => { },
    }

    describe('Loading initial', () => {
        const loading = shallow(<Loading {...props}/>);

        it('renders correctly', () => {
            expect(loading.debug()).toMatchSnapshot()
        })
    });

    describe('Loading start', () => {
        const nextProps = {
            ...props,
            isLoading: true,
        }

        const loading = shallow(<Loading {...nextProps}/>);

        it('renders correctly', () => {
            expect(loading.debug()).toMatchSnapshot()
        })
    });
})
