import React from "react";
import Nav from "./Nav";


const NavContainer = (props) => {

    let state = props.store.getState().sideBar;

    return (
        <Nav state={state} />
    );
}

export default NavContainer;
