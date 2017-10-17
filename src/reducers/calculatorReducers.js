const initialState = {output:0}

const calculatorReducers = (state=initialState,action) => {
    switch (action.type){      
        case 'ADD_INPUT': 
            return {...state, output:action.input + state.output}
        case 'MULTIPLY_INPUT':
            return {...state,output:action.input * state.output}
        default: return {...state}
    }
}

export default calculatorReducers