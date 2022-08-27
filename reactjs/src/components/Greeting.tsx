import React, { useState } from "react";

const Welcome: React.FC = () => {
  const hello = (e: React.MouseEvent<HTMLElement>) :void => {
    console.log(`Hello ${name}`)
  }
  const changeName = (e: React.MouseEvent<HTMLElement>): void => {
    setName((name==="seiji")?"honoka":"seiji")
  }
  const [name, setName] = useState("seiji");

  return (
    <>
      <h1 onClick={hello}>Hello, {name}</h1>
      <button onClick={changeName}>Click me</button>
    </>
    
  )
}

export default Welcome;