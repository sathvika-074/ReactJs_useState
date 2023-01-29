import React, { useState } from 'react'

const Counter = () => {
    const handleClick = () => {
        console.log("Clicked...");
        setCount(count+1);
    };

    const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times</button>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  )
}

export default Counter
