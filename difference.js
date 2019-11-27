function _difference(array, values) {
  if(!Array.isArray(array)) return [];
  if(!Array.isArray(values)) values = [values];
  const result = [];
  for(let eachNumber of array) {
    if(values.indexOf(eachNumber) === -1) {
      result.push(eachNumber);
    }
  }
  return result;
}

function _difference2(array, values) {
  if(!Array.isArray(array)) return [];
  if(!Array.isArray(values)) values = [values];
  const hash = {};
  const result = [];
  for(let value of values) {
    hash[value] = 1;
  }
  for(let eachNumber of array) {
    if(!hash[eachNumber]) {
      result.push(eachNumber);
    }
  }
  return result;
}
