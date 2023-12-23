import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News.jsx"
import Music from "./components/Music/Music.jsx"
import Settings from "./components/Settings/Settings.jsx"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <Nav />
          <div className="app-wrapper-content"> 
            <Routes>
              <Route path="/dialogs" element={<Dialogs messages={props.messages} dialogsData={props.dialogsData} />} />
              <Route path="/profile" Component={Profile} />
              <Route path="/news" Component={News} />
              <Route path="/music" Component={Music} />
              <Route path="/settings" Component={Settings} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
