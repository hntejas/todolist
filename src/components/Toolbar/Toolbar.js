import React from "react";

import classes from "./Toolbar.module.css";
import appLogo from "../../assets/app-logo-white.png";

const toolbar = props => {
  return (
    <div className={classes.toolbar}>
      <div className={classes.logo}>
        <img src={appLogo} alt="App Logo" />
      </div>
      <div className={classes.appName}>Todoist</div>
    </div>
  );
};

export default toolbar;
