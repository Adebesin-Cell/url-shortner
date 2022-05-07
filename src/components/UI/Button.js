import styles from "./Button.module.scss";

const Button = function (props) {
  const classArray = props.className.split(" ");

  return (
    <button
      className={classArray.map((str) => styles[str]).join(" ")}
      onClick={props.onClick}
      value={props.text}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
