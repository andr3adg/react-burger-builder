import React, { Fragment } from "react";

const orderSummary = (props) => {
  let ingList = Object.keys(props.ingredients).map((el) => {
    return (
      <li>
        {el} <span /> {props.ingredients[el]}
      </li>
    );
  });
  console.log(ingList);

  return (
    <Fragment>
      <h3>Your Order:</h3>
      <p>Your burger consists of these ingredients:</p>
      <ul>{ingList}</ul>
    </Fragment>
  );
};

export default orderSummary;
