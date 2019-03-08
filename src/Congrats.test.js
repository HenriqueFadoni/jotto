import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProp } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` props is false ', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success`is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectProps = { success: false };
    checkProp(Congrats, expectProps);
});