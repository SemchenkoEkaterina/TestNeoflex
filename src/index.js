import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from './store/DeviceStore';
import CartStore from './store/CartStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null);

root.render(
  <Context.Provider value = {{
    device: new DeviceStore(),
    cart: new CartStore()
  }}>
    <App />
  </Context.Provider>
);
