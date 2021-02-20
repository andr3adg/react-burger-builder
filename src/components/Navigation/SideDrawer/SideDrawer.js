import React, { Fragment } from "react";
import classes from "./SideDrawer.Module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
const sideDrawer = (props) => {
  console.log("backdrop show: ", props.isVisible);
  return (
    <Fragment>
      <Backdrop show={props.isVisible} clicked={props.sideDrawerAction} />
      <div
        className={[
          classes.SideDrawer,
          props.isVisible ? classes.Open : classes.Closed,
        ].join(" ")}
      >
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
