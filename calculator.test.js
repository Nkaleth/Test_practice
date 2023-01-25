const Calculator = require('./calculator');

describe('Calculator', () =>{
  const nums0 = new Calculator(4,5);
  const nums1 = new Calculator(4,7);
  const nums3 = new Calculator(2,8);
  test('Multiply', () =>{
    expect(nums0.multiply()).toBe(20);
  });
  test('Multiply', () =>{
    expect(nums1.multiply()).toBe(28);
  });
  test('Multiply', () =>{
    expect(nums3.multiply()).toBe(16);
  });

  test('Divide', () =>{
    expect(nums0.divide()).toBe(4/5);
  });
  test('Divide', () =>{
    expect(nums1.divide()).toBe(4/7);
  });
  test('Divide', () =>{
    expect(nums3.divide()).toBe(2/8);
  });

  test('Substract', () =>{
    expect(nums0.substract()).toBe(-1);
  });
  test('Substract', () =>{
    expect(nums1.substract()).toBe(-3);
  });
  test('Substract', () =>{
    expect(nums3.substract()).toBe(-6);
  });

  test('Add', () =>{
    expect(nums0.add()).toBe(9);
  });
  test('Add', () =>{
    expect(nums1.add()).toBe(11);
  });
  test('Add', () =>{
    expect(nums3.add()).toBe(10);
  });

}); 