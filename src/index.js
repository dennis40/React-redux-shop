import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createRootReducer } from './modules/reducers/createRootReducer';
import { Provider } from 'react-redux';
import { routes } from './modules/routes';

const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
