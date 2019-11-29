function _drop(array, n = 1) {
  const result = array.slice();
  for(let i=n; i<result.length; i++) {
    result[i-n] = result[i];
  }
  result.length -= n;
  return result;
}

function _drop2(array, n = 1) {
  n = Math.floor(Number(n))
  if( n < 0 ||n > array.length) return [];
  const result = array.slice(n)
  return result;
}
