import logo from './logo.svg';
import './App.css';
import Result from './Result';
import React, { useState } from 'react';

const characters = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
const initialFormData = Object.freeze({
  password_length: '8'
});

function App() {
  let [password, setPassword] = useState('')

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  //Generate password when button is pressed
  const handleSubmit = (e) => {
    password = ""
    e.preventDefault();
    if(formData.password_length > 50) {
      alert("Length must be less than 50 characters")
    }
    else{ 
      const length = parseInt(formData.password_length)
      for(let i=0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      console.log(password)
      setPassword(password)  
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Password Generator</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
            <label>How many characters long should the password be? (8-50 characters)</label><br />
            <input min="8" placeholder="8" max="50" type="number" name="password_length" onChange={handleChange}></input><br />
            </div>
            <div className="col-md-6">
              <div className="checkboxes">
                <div className="checkbox-container">
                  <div className="row">
                    <div className="col-6">
                      <label>Include symbols:</label>
                    </div>
                    <div className="col-6">
                      <input type="checkbox"></input> 
                      <span>( e.g. @#$% )</span>
                    </div>
                  </div>
                </div>
                <div className="checkbox-container">
                  <div className="row">
                    <div className="col-6">
                      <label>Include numbers:</label>
                    </div>
                    <div className="col-6">
                      <input type="checkbox"></input>
                      <span>( e.g. 123456 )</span>
                    </div>
                  </div>
                </div>
                <div className="checkbox-container">
                  <div className="row">
                    <div className="col-6">
                      <label>Include Lowercase Characters:</label>
                    </div>
                    <div className="col-6">
                      <input type="checkbox"></input>
                      <span>( e.g. abcdefgh )</span>
                    </div>
                  </div>
                </div>
                <div className="checkbox-container">
                  <div className="row">
                    <div className="col-6">
                      <label>Include Uppercase Characters:</label>
                    </div>
                    <div className="col-6">
                      <input type="checkbox"></input>
                      <span>( e.g. ABCDEFGH )</span>
                    </div>
                  </div>
                </div>
                <div className="checkbox-container">
                  <div className="row">
                    <div className="col-6">
                      <label>Exclude Ambiguous Characters:</label>
                    </div>
                    <div className="col-6">
                      <input type="checkbox"></input>
                      <span>( e.g. &#x7b; &#x7d; &#x5b; &#x5d; &#x28; &#x29; &#47; &#92; &#39; &#34; &#96; &#126; &#44; &#59; &#58; &#46; &#60; &#62; )</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col--md-12">
              <input type="submit" value="Generate"></input>
            </div>
          </div>
        </form>
        <Result password={password}/>
      </header>
    </div>
  );
}

export default App;
