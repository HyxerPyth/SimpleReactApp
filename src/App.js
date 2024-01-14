import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News.jsx"
import Music from "./components/Music/Music.jsx"
import Settings from "./components/Settings/Settings.jsx"


const App = (props) => {
  return (
      <div className="app-wrapper">
          <Header />
          <Nav store={props.store.sideBar}/>
          <div className="app-wrapper-content"> 
            <Routes>
              <Route path="/dialogs" element={<Dialogs store={props.store.dialogsPage} />} />
              <Route path="/profile" element={<Profile store={props.store.profilePage} addPost={props.store.addPost} addPostArea={props.store.addPostArea} />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
      </div>
  );
} 





export default App;
