function NumberButtons({ UpdateCalc }) {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => UpdateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return <div className="numbers">{digits}</div>;
  }
  
  export default NumberButtons;
  