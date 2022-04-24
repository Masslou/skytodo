import React from 'react';
import { Layout } from '../index';

const setUp = (props) => shallow(<Layout {...props} />);
describe('should render layout component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('Component layout contains main wrapper', () => {
    const wrapper = component.find('section');
    expect(wrapper.length).toBe(1);
  });
});
