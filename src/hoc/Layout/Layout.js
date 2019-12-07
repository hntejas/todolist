import React from "react";

import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const layout = props => {
  return (
    <Aux>
      <Toolbar></Toolbar>
      <main className={classes.main}>{props.children}</main>
    </Aux>
  );
};

export default layout;
