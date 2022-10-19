import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    //1st arg: side effect (callback function)
    console.log("useEffect called");

    //2nd arg: dependencies array
  }, [count]);

  console.log("Component rendering");


  useEffect(()=>{
  document.title = text
},[text])

useEffect(() => {
  setTimeout(() => setCount(0), 3000)
},[count])


  const handleClick = () => {
    setCount((count) => count + 1)
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }


  return(
    <>
    <div> 
      <button onClick={handleClick}>I've been clicked {count} times</button>;
      <input type="text" placeholder="Type away..." value={text} onChange={handleChange}/>
    </div>
    <DogPics />
    </>
)}

export default App;
