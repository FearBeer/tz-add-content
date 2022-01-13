import './Button.css';

function Button(props) {
  return (
    <button className="Button" style={props.style}>
      {props.text}
    </button>
  );
}

export default Button;