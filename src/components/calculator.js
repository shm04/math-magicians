import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './calculator.css';
import calculate from './logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({});

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <div className="main-div">
      <CalcScreen calculatorData={calculatorData} />
      <div className="btns-div">
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('AC')}>AC</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('%')}>%</button>
        <button className="calc-btn orange-btns" type="button" onClick={() => handleButtonClick('÷')}>÷</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="calc-btn orange-btns" type="button" onClick={() => handleButtonClick('x')}>x</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="calc-btn orange-btns" type="button" onClick={() => handleButtonClick('-')}>-</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="calc-btn orange-btns" type="button" onClick={() => handleButtonClick('+')}>+</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('0')}>0</button>
        <button className="calc-btn" type="button" onClick={() => handleButtonClick('.')}>.</button>
        <button className="calc-btn orange-btns" id="equal-btn" type="button" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

const CalcScreen = ({ calculatorData }) => (
  <p className="calc-screen">{calculatorData.next || calculatorData.operation || calculatorData.total || '0'}</p>
);

CalcScreen.propTypes = {
  calculatorData: PropTypes.shape({
    next: PropTypes.string,
    operation: PropTypes.string,
    total: PropTypes.string,
  }).isRequired,
};

export default Calculator;
