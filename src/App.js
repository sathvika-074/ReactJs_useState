import React, { useState } from 'react'
import App2 from './App2'


const App = () => {
    let message = "Coming from root app.js";
    const handleClick = () => {
        console.log("Clicked...");
        setCount(count+1);
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value);
        
    };

    const handleClick1 = () => {
      setUpdated(msg);
    }

    //Hooks
    const [count, setCount] = useState(0);
    const [msg, setMessage] = useState('');
    const [updated, setUpdated] = useState(msg);

    return (
    <div>
      <h1>This is App1</h1>
      <App2 msg={message}></App2>
      <input type="text" onChange={handleChange}/>
      <h2>Name: {msg}</h2>
      <button onClick={handleClick1}>Update</button>
      <h2>Updated Name: {updated}</h2>
      <button onClick={handleClick}>Clicked {count} times</button>            { /*Handling event*/ }
    </div>
  )
}

export default App
