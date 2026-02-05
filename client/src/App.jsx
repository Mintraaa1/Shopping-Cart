import React from 'react'
import "./index.css";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { RouterProvider } from 'React'; 
import Router from './router/Router.jsx';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;