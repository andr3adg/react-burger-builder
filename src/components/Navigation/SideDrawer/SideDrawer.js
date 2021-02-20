import React from "react";
import classes from "./SideDrawer.Module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const sideDrawer = (props) => {
  return (
    <div className={[classes.SideDrawer].join(" ")}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
