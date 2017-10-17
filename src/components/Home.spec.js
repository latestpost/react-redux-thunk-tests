import React, {Component} from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Home from './Home';

it('renders correctly', () => {
  const wrapper = shallow(
    <Home />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});