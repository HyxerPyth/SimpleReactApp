import './index.css';
import store from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

 let rerenderEntireTree = (store) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} addPost={store.addPost} />
      </BrowserRouter>
    </React.StrictMode>
  ); 
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();





