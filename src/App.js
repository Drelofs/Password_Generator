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
          <label>How many characters long should the password be? (8-50 characters)</label><br />
          <input min="8" placeholder="8" max="50" type="number" name="password_length" onChange={handleChange}></input><br />
          <input type="submit" value="Generate"></input>
        </form>
        <Result password={password}/>
      </header>
    </div>
  );
}

export default App;
