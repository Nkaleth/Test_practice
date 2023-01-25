const stringLength = require('./stringLength');

describe('string', ()=>{

  test('Characters\'s string count', () => {
    expect(stringLength('1234567890')).toBe(10);
  });
  
  test('Characters\'s string count', () => {
    expect(() => stringLength('12345678910')).toThrowError('The string should have more than 0 and less than 10 characters');
  });
  
});

