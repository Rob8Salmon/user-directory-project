import React, { useState } from 'react';
import Header from './Components/Header';
import Card from './Components/Tasks/Card';
import Button from './Components/Tasks/Buttons';
import './App.css';


function App() {
  const [input, setInput] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <div>
      <Card input={input}></Card>
      <Button input={input} setInput={setInput}></Button>
      </div>
    </div>
  );
}

export default App;
