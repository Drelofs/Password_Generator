import './Result.css';
import React, { useRef } from "react";
import FadeIn from 'react-fade-in';

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

  if ('' === password) {
    return <h3>Click "Generate" to create your new password.</h3>
  }
  else if ('empty' === password) {
    return <h3>Please select one of the toggle options for your password.</h3>
  }

  return (
    <FadeIn>
      <div className="Result">
          <h3>Here is your password:</h3>
          <input type="text" className="output-field" ref={textInput} value={password}></input>
          <button className="button copy" onClick={copyText}>
            Copy
          </button>
          {showElement? <span className="copy-alert" >Copied!</span> :<></>}
      </div>
    </FadeIn>
  );
}

export default Result;