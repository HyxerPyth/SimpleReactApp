import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
  {id: 1,name: "Peter"}, 
  {id: 2,name: "Tom"},
  {id: 3,name: "Donald"},
  {id: 4,name: "Nick"},
  {id: 5,name: "Jack"} 
]

let messages= [
  {id: 1,message: "Hi"},
  {id: 2,message: "What's new?"},
  {id: 3,message: "What's up, bro!"}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messages={messages} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
