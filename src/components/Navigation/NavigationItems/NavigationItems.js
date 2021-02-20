import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.Module.css";
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="http://www.google.pt" active text="Google" />
    <NavigationItem link="http://www.facebook.com" text="Facebook" />
  </ul>
);
export default navigationItems;
