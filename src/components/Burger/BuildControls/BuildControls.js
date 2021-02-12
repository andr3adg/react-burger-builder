import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.Module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((el, i) => {
      return (
        <BuildControl
          key={el.label + i + 1}
          label={el.label}
          type={el.type}
          add={props.addIngredient}
          remove={props.removeIngredient}
        />
      );
    })}
  </div>
);

export default buildControls;
