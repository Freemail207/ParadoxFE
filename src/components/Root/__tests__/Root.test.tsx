import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root'

describe('Root Component Test', () => {
    test('Check Root Component render', async () => {
        const component = shallow(<Root />);

        expect(component).toMatchSnapshot();
    });
});
