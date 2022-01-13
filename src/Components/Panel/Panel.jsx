import './Panel.css';

function Panel(props) {
  return (
    <div className="Panel" style={props.style}>      
     {props.text}
     {props.children}
    </div>
  );
}

export default Panel;