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
      <textarea value={text}  onChange={handleOnChange} cols="50"  id='text' rows="10"></textarea>
      </div>
     <div className="convert-btn">
     <button className='btn' onClick={changeToUpperCase}>Change to UpperCase</button>
     <button className='btn'  onClick={changeToLowerCase}>Change to LowerCase</button>
     </div>
     <div className="text-summary">
         <h3>Your text Summary</h3>
         <p>{text.split(" ").length} words and {text.length} character</p>
          <p>{0.008 * text.split(" ").length} Minutes read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
     </div>
    </div>
  )
}

export default App
