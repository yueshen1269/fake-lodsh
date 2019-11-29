
function _difference() {
  // 参考 ./difference.js
}
function _differenceBy(array, ...values) {
  const iteratee = values.slice(-1);
  if(typeof iteratee !== "function") return _difference(array, values);
  values = values.slice(0, -1);
  array = array.map(arrayItem => iteratee(arrayItem));
  values = values.map(value => iteratee(value));
  return _difference(array, values);
}
