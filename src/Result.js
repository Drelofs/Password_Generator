
function Result(props) {


  return (
    <div className="Result">
        <h3>Here is your password:</h3>
        <p id="output">{props.password}</p>
        <button>Copy</button>
    </div>
  );
}

export default Result;