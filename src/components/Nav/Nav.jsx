import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const setActive = ({isActive}) => ({color: isActive ? '#0071e3' : 'var(--color-active)'});





const Nav = (props) => {

    let friendsData = props.state.map(f => <Friends key={f.id} name={f.name} profileImage={f.profileImage} /> );

    return (
        <nav className={s.nav}>
          <div className={s.item}>
            <NavLink to="/profile" style={setActive}>Profile</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs" style={setActive}>Messages</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/news" style={setActive}>News</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/music" style={setActive}>Music</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/settings" style={setActive}>Settings</NavLink>
          </div>
          <div className={s.friendsData}>
            {friendsData}
          </div>
        </nav>
    );
}

export default Nav;