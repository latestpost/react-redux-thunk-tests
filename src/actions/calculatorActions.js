export const addInput = (input) => {
    return {
        type: 'ADD_INPUT',
        input: input 
    }
}

export const multiplyInput = (input) => {
    return {
        type: 'MULTIPLY_INPUT',
        input: input 
    }
}

export const fetchSomethingRequest =  () => {
  return {
    type: 'FETCH_SOMETHING_REQUEST'
  }
}

export const fetchSomethingSuccess = (body) => {
  return {
    type: 'FETCH_SOMETHING_SUCCESS',
    body: body
  }
}

export const fetchSomethingFailure = (err) => {
  return {
    type: 'FETCH_SOMETHING_FAILURE',
    err
  }
}

export const fetchSomething = () => {
  return function (dispatch) {
    dispatch(fetchSomethingRequest())
    return fetch('http://1/test', {
    method: 'GET'
  })
  .then(function(result) {
    if (result.status === 200) {
      dispatch(fetchSomethingSuccess())
      return 'result'
    }
    dispatch(fetchSomethingFailure())
    return 'failed'
  }, function(error) {
    return 'error'
  })
  }
}