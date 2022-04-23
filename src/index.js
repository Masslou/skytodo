// Core
import React from 'react';
import ReactDOM from 'react-dom';
// Store
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import { App } from './App';
import { Layout } from './components/index';
// Styles
import './theme/styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <App />
        </Layout>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
