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
          add={() => props.addIngredient(el.type)}
          remove={() => props.removeIngredient(el.type)}
        />
      );
    })}
  </div>
);

export default buildControls;
