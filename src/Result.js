import './Result.css';
import React, { useRef } from "react";

function Result({ password }) {
  const [showElement,setShowElement] = React.useState(false)
  const textInput = useRef(null);
  const copyText = (e) => {
    navigator.clipboard.writeText(textInput.current.value);
    setTimeout(function() {
      setShowElement(true)
         }, 10);
    setTimeout(function() {
    setShowElement(false)
        }, 3000);
  }

  if ('' == password) {
    return <div>No password</div>
  }

  return (
    <div className="Result">
        <h3>Here is your password:</h3>
        <input type="text" className="output-field" ref={textInput} value={password} readOnly></input>
        <button className="button copy" onClick={copyText}>
          Copy
        </button>
        {showElement? <span className="copy-alert" >Copied!</span> :<></>}
    </div>
  );
}

export default Result;