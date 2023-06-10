import './calculator.css';

function Calculator() {
  return (
    <div className="main-div">
      <CalcScreen />
      <div className="btns-div">
        <button className="calc-btn" type="button">AC</button>
        <button className="calc-btn" type="button">+/-</button>
        <button className="calc-btn" type="button">%</button>
        <button className="calc-btn orange-btns" type="button">/</button>
        <button className="calc-btn" type="button">7</button>
        <button className="calc-btn" type="button">8</button>
        <button className="calc-btn" type="button">9</button>
        <button className="calc-btn orange-btns" type="button">x</button>
        <button className="calc-btn" type="button">4</button>
        <button className="calc-btn" type="button">5</button>
        <button className="calc-btn" type="button">6</button>
        <button className="calc-btn orange-btns" type="button">-</button>
        <button className="calc-btn" type="button">1</button>
        <button className="calc-btn" type="button">2</button>
        <button className="calc-btn" type="button">3</button>
        <button className="calc-btn orange-btns" type="button">+</button>
        <button className="calc-btn" type="button">0</button>
        <button className="calc-btn" type="button">.</button>
        <button className="calc-btn orange-btns" id="equal-btn" type="button">=</button>
      </div>
    </div>
  );
}

const CalcScreen = () => (
  <p className="calc-screen">0</p>
);

export default Calculator;
