import classes from "./Button.Module.css";

const button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={[
        classes.Button,
        props.btnType === "Danger" ? classes.Danger : classes.Success,
      ].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default button;
