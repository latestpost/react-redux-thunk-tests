import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/calculatorReducers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
    );
  }
}

const store = createStore(reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default App;
