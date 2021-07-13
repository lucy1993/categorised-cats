import React from 'react';
import ReactDOM from 'react-dom';
// store
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
// style
import './index.css';
// main app
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={configureStore}>
      <App />
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
