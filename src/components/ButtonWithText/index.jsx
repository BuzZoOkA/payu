import './buttons.css';

const ButtonWithText = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default ButtonWithText;
