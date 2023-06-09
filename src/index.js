import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Assets/Css/Bootstrap.css";
import "./Assets/Css/Style.css";
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);