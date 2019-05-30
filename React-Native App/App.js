
import React, {Component} from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/Reducers';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router/>
      </Provider>
    );
  }
}
