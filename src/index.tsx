import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { Spin } from 'antd';
import './i18n'
let persistor = persistStore(store)



ReactDOM.render(
  <React.Suspense fallback={<Spin/>}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <React.StrictMode>
            <BrowserRouter basename='/'>
              <App />
            </BrowserRouter>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </React.Suspense>,
  document.getElementById('root')
);

