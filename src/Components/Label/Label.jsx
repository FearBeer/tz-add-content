import './Label.css';

function Label(props) {
  return (
    <span className="Label" style={props.style}>
     {props.caption}
    </span>
  );
}

export default Label;