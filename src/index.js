import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';

let persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
