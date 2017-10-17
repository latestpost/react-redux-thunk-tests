import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import calculatorReducers from './calculatorReducers'

describe('>>>R E D U C E R --- Test calculatorReducers',()=>{
    it('+++ reducer for ADD_INPUT', () => {
        const initialState = {output:100}
        let state = calculatorReducers(initialState,{type:"ADD_INPUT",input:100})
        expect(state).toEqual({output:200})
    });
    it('+++ reducer for MULTIPLY_INPUT', () => {
        const initialState = {output:100}
        let state = calculatorReducers(initialState,{type:"MULTIPLY_INPUT",input:2})
        expect(state).toEqual({output:200})
    });

});