import React, { useRef } from 'react'

const Referencia = () => {
  const inputRef = useRef();
  console.log (inputRef);

  const handleFocus = () =>{
    const input = document.getElementById('input-focus');
    input.focus();
  }

  return (
    <div>
      <h1>Referencia</h1>
      <input type='text' ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <input type='text' id='input-focus'/>
      <button onClick={handleFocus}>Focus 2</button>
    </div>
  )
}

export default Referencia