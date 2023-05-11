function Operators({ UpdateCalc }) {
    return (
      <div className="operators">
        <button onClick={() => UpdateCalc('+')}>+</button>
        <button onClick={() => UpdateCalc('-')}>-</button>
        <button onClick={() => UpdateCalc('*')}>*</button>
        <button onClick={() => UpdateCalc('/')}>/</button>
      </div>
    );
  }
  
  export default Operators;
  