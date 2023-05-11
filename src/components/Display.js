function Display({ result, calc }) {
  return (
    <div className="display">
      <span>({result})</span>
      {calc || '0'}
    </div>
  );
}

export default Display;
