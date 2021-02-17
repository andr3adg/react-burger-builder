import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };

  addIngredientHandler = (type) => {
    let auxIngredients = { ...this.state.ingredients };
    let newValue = this.state.ingredients[type] + 1;
    auxIngredients[type] = newValue;
    let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState(
      { ingredients: auxIngredients, totalPrice: newPrice },
      this.updatePurchasableStatus(auxIngredients)
    );
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      let auxIngredients = { ...this.state.ingredients };
      let newValue = this.state.ingredients[type] - 1;
      auxIngredients[type] = newValue;
      auxIngredients[type] = newValue;
      let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState(
        { ingredients: auxIngredients, totalPrice: newPrice },
        this.updatePurchasableStatus(auxIngredients)
      );
    }
  };

  updatePurchasableStatus = (updatedIngredients) => {
    let sum = 0;
    const ingredients = { ...updatedIngredients };
    for (let key in ingredients) {
      sum += ingredients[key];
    }
    this.setState({ purchasable: sum > 0 });
  };

  render() {
    let disabledKeys = [];
    for (let key in this.state.ingredients) {
      this.state.ingredients[key] === 0 && disabledKeys.push(key);
    }
    return (
      <Fragment>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledKeys}
          purchasable={this.state.purchasable}
          totalPrice={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
