import logoImg from "../../assets/images/burger-logo.png";
import classes from "./Logo.Module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={logoImg} alt="My Burger Logo" />
  </div>
);
export default logo;
