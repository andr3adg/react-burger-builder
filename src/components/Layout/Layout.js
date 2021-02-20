import React, { Component, Fragment } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sideDrawerVisible: false,
  };

  sideDrawerHandler = () => {
    this.setState({ sideDrawerVisible: !this.state.sideDrawerVisible });
  };

  render() {
    return (
      <Fragment>
        {this.state.sideDrawerVisible && (
          <SideDrawer
            isVisible={this.state.sideDrawerVisible}
            sideDrawerAction={this.sideDrawerHandler}
          />
        )}
        <Toolbar sideDrawerAction={this.sideDrawerHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
