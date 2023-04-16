import './Result.css';
import React, { useRef } from "react";
import FadeIn from 'react-fade-in';

function Result({ password }) {
  const [showElement,setShowElement] = React.useState(false)
  const textInput = useRef(null);
  const copyText = (e) => {
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(function() {
      setShowElement(true)
         }, 10);
    setTimeout(function() {
    setShowElement(false)
        }, 3000);
  }

  if ('' === password) {
    return <h3>Click "New" to create your password.</h3>
  }
  else if ('empty' === password) {
    return <h3>Please select one of the toggle options for your password.</h3>
  }

  return (
    <FadeIn>
      <div className="Result">
          <h3>Here is your password</h3>
          <div className="output">
            <div className="output-field" ref={textInput}>{password}</div>
            <div className="copy-field">
              {showElement? <span className="copy-alert" >Copied!</span> :<></>}
              <button className="copy" onClick={copyText}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
              </button>
            </div>
          </div>
      </div>
    </FadeIn>
  );
}

export default Result;