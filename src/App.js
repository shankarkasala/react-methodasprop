import React, { useState } from 'react';
import './style.css';
import Child from './Child';
export default function App() {
  const [name, setName] = useState('');

  const greetHandler = (p) => {
    setName(p);
    alert('hello im from' + ' ' + name);
  };
  return (
    <div>
      <Child greetHandler={greetHandler} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
