import { addInput, multiplyInput, fetchSomething } from './calculatorActions'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('>>>A C T I O N --- Test calculatorActions', () => {
    it('+++ actionCreator addInputs', () => {
        const add = addInput(50)
        expect(add).toEqual({ type: "ADD_INPUT", input: 50 })
        expect(add).toMatchSnapshot();
    });
    it('+++ actionCreator multiplyInputs', () => {
        const add = multiplyInput(31)
        expect(add).toMatchSnapshot();
    });
});

describe('Test thunk action creator', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })
    it('expected actions should be dispatched on failed request', () => {
        const store = mockStore({})
        const expectedActions = [
            'FETCH_SOMETHING_REQUEST',
            'FETCH_SOMETHING_FAILURE'
        ]
        fetchMock.get('*', 404)

        return store.dispatch(fetchSomething())
            .then(() => {
                const actualActions = store.getActions().map(action => action.type)
                expect(actualActions).toEqual(expectedActions)
            })
    })

    it('expected actions should be dispatched on successful request', () => {
        const store = mockStore({})
        const expectedActions = [
            'FETCH_SOMETHING_REQUEST',
            'FETCH_SOMETHING_SUCCESS'
        ]

        fetchMock.get('*', 200)
        return store.dispatch(fetchSomething())
            .then(() => {
                const actualActions = store.getActions().map(action => action.type)
                expect(actualActions).toEqual(expectedActions)
            })
    })
})