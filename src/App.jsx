import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("inter text here");
  const changeToUpperCase=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const changeToLowerCase=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
const handleOnChange = (event)=>{
  setText(event.target.value);
}
  return (
    <div className='main'>
     <h1>Text-Converter</h1>
     <div className="container">
      <textarea value={text}  onChange={handleOnChange} cols="50" rows="10"></textarea>
     
     <div className="convert-btn">
     <button className='btn' onClick={changeToUpperCase}>Change to UpperCase</button>
     <button className='btn'  onClick={changeToLowerCase}>Change to LowerCase</button>
     </div>
     </div>
    </div>
  )
}

export default App
