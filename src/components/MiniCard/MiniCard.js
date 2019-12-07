import React from "react";

import classes from "./MiniCard.module.css";

const miniCard = props => {
  return (
    <div className={classes.miniCard} draggable>
      <p className={classes.cardTitle}>{props.details.title}</p>
      <div className={classes.cardDescription}>{props.details.description}</div>
    </div>
  );
};

export default miniCard;
