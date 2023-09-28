import './App.css';
import NumContainer from './NumContainer';
import NumGenParam from './NumGenParam';
import React, { useState } from 'react';

function App() {

  const [output, SetOutput] = useState('');
  const [minVal, SetMinVal] = useState('');
  const [maxVal, SetMaxVal] = useState('');

  const handleMinChange = (e) => {
    SetMinVal(e.target.value);
  }

  const handleMaxChange = (e) => {
    SetMaxVal(e.target.value);
  }

  const handleOutput = () => {
    let min = Math.ceil(minVal);
    let max = Math.floor(maxVal);
    SetOutput(Math.floor(Math.random() * (max - min + 1) + min))
  }

  return (
    <div className="App">
      <NumContainer output={output} />
      <NumGenParam minVal={minVal} maxVal={maxVal}
        onMinChange={handleMinChange} onMaxChange={handleMaxChange} handleOutput={handleOutput} />
    </div>
  );
}

export default App;