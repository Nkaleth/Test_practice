const reverseString = require('./reverseString');

test('Reverse string', ()=>{
  expect(reverseString('The Cure')).toBe('eruC ehT');
});