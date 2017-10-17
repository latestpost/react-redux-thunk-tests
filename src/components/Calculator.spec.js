import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import reducers from '../reducers/calculatorReducers';
import { createStore } from 'redux';

import toJson from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const store = createStore(reducers);

import Calculator from './Calculator';

it('renders correctly', () => {
  const wrapper = render(
    <Provider store={store}>
        <Calculator />
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});