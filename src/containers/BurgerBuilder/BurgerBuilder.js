import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };

  addIngredientHandler = () => {
    console.log("add");
  };

  removeIngredientHandler = () => {
    console.log("remove");
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
