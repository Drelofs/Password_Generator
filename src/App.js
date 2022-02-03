import './App.css';
import Result from './Result';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const lowercase_letters = 'abcdefghijklmnopqrstuvwxyz'
const uppercase_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number_characters = '0123456789'
const symbol_characters = '#$%&!?@^*+=-_'
const other_characters = '"\'[](){}|/\\<>:;`~.,'

const initialFormData = Object.freeze({
  password_length: 12,
  checkbox_symbols: true,
  checkbox_numbers: true,
  checkbox_lowercase: true,
  checkbox_uppercase: true,
  checkbox_other: false,
});

function App() {
  let [password, setPassword] = useState('')
  const [formData, updateFormData] = React.useState(initialFormData);

  //Handle change on password length
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value
    });
  };

  //Handle change on checkboxes
  const handleToggle = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  }

  //Generate password when button is pressed
  const handleSubmit = (e) => {
    e.preventDefault();
    //Checks if checkboxes are checked and adds relevant characters.
    const acceptable_characters = [].concat(
      formData.checkbox_lowercase ? [lowercase_letters] : [],
      formData.checkbox_uppercase ? [uppercase_letters] : [],
      formData.checkbox_numbers ? [number_characters] : [],
      formData.checkbox_symbols ? [symbol_characters] : [],
      formData.checkbox_other ? [other_characters] : [],
    ).join('');
    password = ''
    if(formData.password_length > 36 || formData.password_length < 8) {
      alert("Length must be more than 8 characters or less than 36 characters long")
    }
    else{ 
      const length = parseInt(formData.password_length)
      for(let i=0;i<length;i++){
        password += acceptable_characters.charAt(Math.floor(Math.random() * acceptable_characters.length))
      }
      if (!password) {
        password = 'empty'
      }
      setPassword(password)  
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Generator</h1>
      </header>
      <section className="main">
        <div className='container'>
          <div className="row justify-content-md-center">
            <div className="col-sm-12 col-md-6">
              <div className='generator-block'>
                <form onSubmit={handleSubmit}>
                  <h3>How many characters? (8-36 characters)</h3>
                  <div className="slider-box">
                    <Slider defaultValue={12} min={8} max={36} name="password_length" aria-label="password_length" valueLabelDisplay="on" onChange={handleChange} sx={{color: '#184a25'}} />
                  </div>
                  <hr></hr>
                  <div className="checkboxes">
                    <div className="checkbox-container">
                      <div className="row justify-content-center">
                        <div className="col-6">
                          <label>Symbols:</label>
                        </div>
                        <div className="col-6">
                          <label className="switch">
                            <input type="checkbox" name="checkbox_symbols" defaultChecked onChange={handleToggle}></input>
                            <span className="slider round"></span>
                          </label>
                          <span>(e.g. @#$%_-)</span>
                        </div>
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="row justify-content-center">
                        <div className="col-6">
                          <label>Numbers:</label>
                        </div>
                        <div className="col-6">
                          <label className="switch">
                            <input type="checkbox" name="checkbox_numbers" defaultChecked onChange={handleToggle}></input>
                            <span className="slider round"></span>
                          </label>
                          <span>(e.g. 123456)</span>
                        </div>
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="row justify-content-center">
                        <div className="col-6">
                          <label>Lowercase</label>
                        </div>
                        <div className="col-6">
                          <label className="switch">
                            <input type="checkbox" name="checkbox_lowercase" defaultChecked onChange={handleToggle}></input>
                            <span className="slider round"></span>
                          </label>
                          <span>(e.g. abcdefgh)</span>
                        </div>
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="row justify-content-center">
                        <div className="col-6">
                          <label>Uppercase</label>
                        </div>
                        <div className="col-6">
                          <label className="switch">
                            <input type="checkbox" name="checkbox_uppercase" defaultChecked onChange={handleToggle}></input>
                            <span className="slider round"></span>
                          </label>
                          <span>(e.g. ABCDEFGH)</span>
                        </div>
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="row justify-content-center">
                        <div className="col-6">
                          <label>Other</label>
                        </div>
                        <div className="col-6">
                          <label className="switch">
                            <input type="checkbox" name="checkbox_other" onChange={handleToggle}></input>
                            <span className="slider round"></span>
                          </label>
                          <span>(e.g. &#x7b; &#x7d; &#x5b; &#x5d; &#x28; &#x29; &#47; &#92;)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <Result password={password}/>
                  <input type="submit" className='button' value="New"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
