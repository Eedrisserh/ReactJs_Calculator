import { useState } from 'react';
import Display from './components/Display';
import Operators from './components/Operators';
import NumberButtons from './components/NumberButtons';
import PunchButtons from './components/PunchButtons';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['+', '-', '*', '/'];

  const UpdateCalc = (value) => {
    if (value === 'C'){
		setCalc("");
		setResult(0);
		return;
	}
	if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const computeResult = () => {
    setResult(eval(calc));
  };
 
  return (
    <div className="App">
      <div className="calculator">
        <Display result={result} calc={calc} />
		<Operators UpdateCalc={UpdateCalc} />
          <NumberButtons UpdateCalc={UpdateCalc} />
		  <PunchButtons>
          <button onClick={() => UpdateCalc('C')}>C</button>
          <button onClick={() => UpdateCalc('0')}>0</button>
          <button onClick={computeResult}>=</button>
        </PunchButtons>
        
      </div>
    </div>
  );
}

export default App;
