import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { move } from './actions';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();

// action reducer testing
store.dispatch(move(1,0));
console.log(store.getState());
store.dispatch(move(0,1));
console.log(store.getState());