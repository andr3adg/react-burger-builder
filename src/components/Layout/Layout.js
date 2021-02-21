import React, { Component, Fragment } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sideDrawerVisible: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ sideDrawerVisible: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerVisible: !prevState.sideDrawerVisible };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar sideDrawerToggleAction={this.sideDrawerToggleHandler} />
        <SideDrawer
          isVisible={this.state.sideDrawerVisible}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
