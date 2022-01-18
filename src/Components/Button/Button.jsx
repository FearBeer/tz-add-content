import './Button.css';

function Button(props) {
  return (
    <button className="Button" style={props.style} onClick={props.onclick}>
      {props.text} 
    </button>
  );
}

export default Button;