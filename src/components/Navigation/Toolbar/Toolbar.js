import React from "react";
import classes from "./Toolbar.Module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <button onClick={props.sideDrawerToggleAction} type="button">
      <div className={classes.Hamburger} />
      <div className={classes.Hamburger} />
      <div className={classes.Hamburger} />
    </button>
    <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
