module.exports = function check(str, bracketsConfig) {
  const arr = [];
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    for (let [key, value] of bracketsConfig) {
      if (str[i] === value) {
        if (arr[index - 1] === key) {
          arr.pop();
          index--; 
        }
        else {
          arr.push(str[i]);
          index++;
        }
      }
      else {
        if (str[i] === key) {
          arr.push(str[i]);
          index++;
        }        
      }
    }
  }
  return (arr.length === 0);
}