import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [myArray, setMyArray] = useState([]);

  const handleInput = (event) => {
    const value = event.target.value;
    // Split the input on commas to create an array of strings
    const newArray = value.split(",");
    setMyArray(newArray);
  };
  return (
    <div className="App">
      <label htmlFor="my-input">Enter a comma-separated list of strings:</label>
      <input id="my-input" onChange={handleInput} />
      <ul>
        {myArray.map((string, index) => (
          <li key={index}>{string}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
