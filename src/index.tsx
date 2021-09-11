/** Link to React-Redux Structure:
 *  https://github.com/FortechRomania/react-redux-complete-example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './views/layouts';

import { AuthProvider } from './views/hooks/use-auth';

import { store, persistor } from './store';

import './assets/styles/index.sass';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </AuthProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
