import './index.css';
import state, { subscribe } from './redux/state'
import store from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, addPostArea } from "./redux/state";
import { BrowserRouter } from 'react-router-dom';


 let rerenderEntireTree = (state) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

store.subscribe(rerenderEntireTree);

reportWebVitals();





