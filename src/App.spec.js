import React, {Component} from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from './App';

it('renders correctly', () => {
  const wrapper = shallow(
    <App />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
