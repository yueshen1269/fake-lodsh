function _baseInterSection(a, b) {
  if(!Array.isArray(a) || !Array.isArray(b)) {
    return [];
  }
  const result = [];
  const hash = {};
  for(let value of a) {
    hash[value] ? hash[value] += 1 : hash[value] = 1;
  }
  for(let value of b) {
    if(hash[value]){
      result.push(value);
      hash[value] -= 1;
    }
  }
  return result;
}

function _interSection(...arrays) {
  if(!Array.isArray(arrays) || arrays.length < 2) return [];
  let result = arrays.shift();
  for(let value of arrays) {
    result = _baseInterSection(value, result);
  }
  return result;
}
