import './App.css';
import Result from './Result';
import React, { useState } from 'react';

const lowercase_letters = 'abcdefghijklmnopqrstuvwxyz'
const uppercase_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number_characters = '0123456789'
const symbol_characters = '#$%&!?@^()*+=-_'
const other_characters = '"\'[]{}|/\\<>:;`~.,'

const initialFormData = Object.freeze({
  password_length: '8',
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
      [e.target.name]: e.target.value.trim()
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
    //Checks if checkboxes are checked and adds respective characters.
    const acceptable_characters = [].concat(
      formData.checkbox_lowercase ? [lowercase_letters] : [],
      formData.checkbox_uppercase ? [uppercase_letters] : [],
      formData.checkbox_numbers ? [number_characters] : [],
      formData.checkbox_symbols ? [symbol_characters] : [],
      formData.checkbox_other ? [other_characters] : [],
    ).join();
    password = ''
    e.preventDefault();
    if(formData.password_length > 50) {
      alert("Length must be less than 50 characters")
    }
    else{ 
      const length = parseInt(formData.password_length)
      for(let i=0;i<length;i++){
        password += acceptable_characters.charAt(Math.floor(Math.random() * acceptable_characters.length))
      }
      setPassword(password)  
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Password Generator</h1>
        <span>Created by Ali Shahid</span>
      </header>
      <section className="main">
        <div className='container'>
          <div className="row equal">
            <div className="col-md-6">
              <div className='generator-block'>
                <form onSubmit={handleSubmit}>
                  <div className="checkboxes">
                    <div className="checkbox-container">
                      <h3>How many characters? (8-50 characters)</h3>
                      <input min="8" placeholder="8" max="50" type="number" className="password-length" name="password_length" onChange={handleChange}></input><br />
                      <div className="row">
                        <h3>Customize password</h3>
                        <div className="col-6">
                          <label>Include symbols:</label>
                        </div>
                        <div className="col-6">
                          <input type="checkbox" name="checkbox_symbols" defaultChecked onChange={handleToggle}></input> 
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
                          <input type="checkbox" name="checkbox_numbers" defaultChecked onChange={handleToggle}></input>
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
                          <input type="checkbox" name="checkbox_lowercase" defaultChecked onChange={handleToggle}></input>
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
                          <input type="checkbox" name="checkbox_uppercase" defaultChecked onChange={handleToggle}></input>
                          <span>( e.g. ABCDEFGH )</span>
                        </div>
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="row">
                        <div className="col-6">
                          <label>Include other Characters:</label>
                        </div>
                        <div className="col-6">
                          <input type="checkbox" name="checkbox_other" onChange={handleToggle}></input>
                          <span>( e.g. &#x7b; &#x7d; &#x5b; &#x5d; &#x28; &#x29; &#47; &#92; &#39; &#34; &#96; &#126; &#44; &#59; &#58; &#46; &#60; &#62; )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="submit" className='button' value="Generate"></input>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className='output-block'>
                <Result password={password}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
