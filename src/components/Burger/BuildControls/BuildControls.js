import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.Module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((el, i) => {
      return (
        <BuildControl
          key={el.label + i}
          label={el.label}
          add={props.addIngredient}
          remove={props.removeIngredient}
        />
      );
    })}
  </div>
);

export default buildControls;
