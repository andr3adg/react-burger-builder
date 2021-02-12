import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    let auxIngredients = { ...this.state.ingredients };
    let newValue = this.state.ingredients[type] + 1;
    auxIngredients[type] = newValue;
    let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: auxIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = (type) => {
    let auxIngredients = { ...this.state.ingredients };
    let newValue = this.state.ingredients[type] - 1;
    auxIngredients[type] = newValue;
    auxIngredients[type] = newValue;
    let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ ingredients: auxIngredients, totalPrice: newPrice });
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
