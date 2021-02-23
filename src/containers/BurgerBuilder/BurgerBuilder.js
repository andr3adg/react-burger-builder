import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";

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
    purchasing: false,
    processingOrder: false,
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

  purchasingHandler = () => {
    this.setState({ purchasing: true, purchasable: false });
  };

  cancelPurchase = () => {
    this.setState({ purchasing: false });
  };

  continuePurchase = () => {
    this.setState({ processingOrder: true });
    let order = {
      burger: this.state.ingredients,
      finalPrice: this.state.totalPrice,
      customer: {
        name: "Tulao Dinho",
        address: {
          streert: "Rua de Testes",
          zipCode: "23423",
          country: "Tugalandia",
        },
        email: "teste@gmail.com",
      },
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ processingOrder: false, purchasing: false });
        console.log("response: ", response);
      })
      .catch((err) => {
        this.setState({ processingOrder: false, purchasing: false });
        console.log("err: ", err);
      });
  };

  render() {
    let disabledKeys = [];
    for (let key in this.state.ingredients) {
      this.state.ingredients[key] === 0 && disabledKeys.push(key);
    }
    return (
      <Fragment>
        {this.state.purchasing && (
          <Modal show={this.state.purchasing} modalClosed={this.cancelPurchase}>
            {this.state.processingOrder ? (
              <Spinner />
            ) : (
              <OrderSummary
                cancelPurchase={this.cancelPurchase}
                continuePurchase={this.continuePurchase}
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
              />
            )}
          </Modal>
        )}
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledKeys}
          purchasable={this.state.purchasable}
          totalPrice={this.state.totalPrice}
          checkoutClick={this.purchasingHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
