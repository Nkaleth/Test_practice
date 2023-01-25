const stringLength = (string) => {
  const newString = string.replace(/\s/g, '');
  if ( newString.length < 0 || newString.length > 10){
    throw new Error('The string should have more than 0 and less than 10 characters');
  }
  return newString.length;
}

module.exports = stringLength;
