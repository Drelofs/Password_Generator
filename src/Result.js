import './Result.css';
function Result(props) {

  return (
    <div className="Result">
        <h3>Here is your password:</h3>
        <input type="text" className="output-field" value={props.password}></input>
        <button className="button copy">Copy</button>
    </div>
  );
}

export default Result;