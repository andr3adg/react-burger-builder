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
    <p>
      Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map((el, i) => {
      return (
        <BuildControl
          key={el.label + i + 1}
          label={el.label}
          add={() => props.addIngredient(el.type)}
          remove={() => props.removeIngredient(el.type)}
          disabled={props.disabled.includes(el.type)}
        />
      );
    })}
    <button disabled={!props.purchasable} className={classes.OrderButton}>
      Checkout
    </button>
  </div>
);

export default buildControls;
