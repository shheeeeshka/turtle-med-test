import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TestStore from './store/TestStore';

import { BrowserRouter } from 'react-router-dom';
import React, { createContext } from 'react';

export const tests = new TestStore();

export const Context = createContext({
  tests
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{ tests }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
);

reportWebVitals();
