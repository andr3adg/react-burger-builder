import classes from "./Burger.Module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = [];
  props.ingredients &&
    (transformedIngredients = Object.keys(props.ingredients)
      .map((ing) => {
        return [...Array(props.ingredients[ing])].map((_, i) => {
          return <BurgerIngredient key={ing + i} type={ing} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }));

  return (
    <div className={classes.Burger}>
      {transformedIngredients.length === 0 && <p>Start adding ingredients!</p>}

      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
