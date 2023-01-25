const capitalize = require('./capitalize');

test('capitalize', () => {
  expect(capitalize('happy coding!')).toBe('Happy coding!');
});