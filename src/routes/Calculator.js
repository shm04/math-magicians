import Calculator from '../components/calculator';
import './Calculator.css';

function CalculatorDiv() {
  return (
    <div className="calculator-div">
      <h3 className="calculator-title">Let´s do some math!</h3>
      <Calculator />
    </div>
  );
}

export default CalculatorDiv;
