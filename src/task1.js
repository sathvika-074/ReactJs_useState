import React, { useState } from 'react'

const Counter1 = () => {
    const handleClick = () => {
        console.log("Clicked...");
        setCount(count+1);
    };

    const handleClick1 = () => {
        console.log("Clicked...");
        setCount1(count1+1);
    };
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times</button>
      <button onClick={handleClick1}>Clicked {count1} times</button>
    </div>
  )
}

export default Counter1


//1.Create a react app to display 10 different student names with id,name,marks by using react props(properties)
//2.Implement useState in react app below
//3.Create a react app todo-list (within 1 day upload 3 pro in github)