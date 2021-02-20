import classes from "./NavigationItem.Module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active && classes.active}>
      {props.text}
    </a>
  </li>
);

export default navigationItem;
