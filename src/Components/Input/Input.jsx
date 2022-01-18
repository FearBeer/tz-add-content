import './Input.css';

function Input(props) {
  return (
    <div className="Input" >
      <label>
        {props.title}
        <input  type="text" onChange={props.onchange} id={props.id}/>
      </label>
    </div>
  );
}

export default Input;