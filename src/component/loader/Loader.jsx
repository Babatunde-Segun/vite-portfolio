import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.loaderMainContainer}>
      <div className={classes.loader}></div>
    </div>
  );
}

export default Loader;
