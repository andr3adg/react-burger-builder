import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  let ingList = Object.keys(props.ingredients).map((el) => {
    return (
      <li key={el}>
        {el} <span /> {props.ingredients[el]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order:</h3>
      <p>Your burger consists of these ingredients:</p>
      <ul>{ingList}</ul>
      <p>Total Price: {props.totalPrice.toFixed(2)}</p>
      <Button btnType="Danger" onClick={props.cancelPurchase}>
        Cancel
      </Button>
      <Button btnType="Success" onClick={props.continuePurchase}>
        Confirm
      </Button>
    </Fragment>
  );
};

export default orderSummary;
