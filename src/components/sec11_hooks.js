/**
 * Multiple hooks example
 */
import React, { useState } from "react"
const Form = () => {
  const [clicks, setClicks] = useState(0);
  const [title, setTitle] = useState("Empty");

  const handleClick = () => {
    setClicks( clicks+1)
  }

  const handleInput = (event) => {
    const title = event.target.value;
    setTitle(title);
  }

  return (
    <div>
      <h1>Hook useState</h1>
      <button onClick={handleClick}>
        Click ({clicks})
      </button>
      <hr></hr>
      <input
        value={title}
        onChange={handleInput}/>
      <h3>{title}</h3>
    </div>
  );
}

export default Form;