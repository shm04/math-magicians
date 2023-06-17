import calculate from '../components/logic/calculate';

describe('Calculate', () => {
  let calculatorObject;

  beforeEach(() => {
    calculatorObject = {
      total: null,
      next: null,
      operation: null,
    };
  });

  it('should clear when "AC" is clicked', () => {
    calculatorObject = {
      total: 300,
      next: null,
      operation: null,
    };

    expect(calculate(calculatorObject, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should append the number to the next property when buttonName is a number', () => {
    calculatorObject = {
      total: null,
      next: '5',
      operation: null,
    };

    expect(calculate(calculatorObject, '5')).toEqual({
      total: null,
      next: '55',
    });
  });

  it('should modify the next property if buttonName is a number and an operation already exists', () => {
    calculatorObject = {
      total: '10',
      next: '5',
      operation: '+',
    };

    expect(calculate(calculatorObject, '5')).toEqual({
      total: '10',
      operation: '+',
      next: '55',
    });
  });

  it('should modify the total and operation properties if the buttonName represents an operator', () => {
    calculatorObject = {
      total: null,
      next: '55',
      operation: null,
    };

    expect(calculate(calculatorObject, '-')).toEqual({
      total: '55',
      operation: '-',
      next: null,
    });
  });

  it('should update the next property with "0." if buttonName is "." and the next property is null', () => {
    calculatorObject = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(calculatorObject, '.')).toEqual({
      total: null,
      next: '0.',
      operation: null,
    });
  });

  it('should update the next property by appending "[next]." if buttonName is "." and the next property is not null', () => {
    calculatorObject = {
      total: null,
      next: '53',
      operation: null,
    };

    expect(calculate(calculatorObject, '.')).toEqual({
      total: null,
      next: '53.',
      operation: null,
    });
  });

  it('should call the operate function if "=" is pressed', () => {
    calculatorObject = {
      total: '20',
      next: '53',
      operation: '+',
    };

    expect(calculate(calculatorObject, '=')).toEqual({
      total: '73',
      next: null,
      operation: null,
    });
  });
});
