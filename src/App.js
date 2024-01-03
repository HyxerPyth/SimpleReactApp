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
          <Nav state={props.state.sideBar.friends}/>
          <div className="app-wrapper-content"> 
            <Routes>
              <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
              <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
      </div>
  );
}



export default App;
