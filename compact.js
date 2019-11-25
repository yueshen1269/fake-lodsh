
/**
 *
 *  首次实现
 *  2019年11月25日17:32:44
 * @param {*} array
 * @returns
 */
function _compact(array) {
  if(!Array.isArray(array)) return [];
  const result = [];
  const len = array.length;
  let i = 0;
  while(i < len) {
    if(!!array[i]) {
      result.push(array[i]);
    }
    i++;
  }
  return result;
}
