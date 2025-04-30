import { useState } from 'react';
import './App.css';
function App() {
  const [counter, setCounter] = useState(15);
  const [txtColor, setColor] = useState('red');
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setColor('green');
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setColor('green'); // optional
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>
        Counter Value: <span style={{ color: txtColor }}>{counter}</span>
      </h2>
      <div>
        <button onClick={addValue}>Add Value</button>
      </div>
      <div>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}
export default App;
