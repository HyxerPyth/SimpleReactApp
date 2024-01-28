import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News.jsx"
import Music from "./components/Music/Music.jsx"
import Settings from "./components/Settings/Settings.jsx"
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import NavContainer from "./components/Nav/NavContainer.jsx";


const App = (props) => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavContainer store={props.store}/>
          <div className="app-wrapper-content"> 
            <Routes>
              <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
              <Route path="/profile" element={<Profile store={props.store} />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
      </div>
  );
} 





export default App;
