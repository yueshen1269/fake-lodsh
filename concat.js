
/**
 *
 *  首次实现 2019年11月26日09:43:56
 * @param {*} array
 * @param {*} values
 * @returns
 */
function _concat(array, ...values) {
  if(!Array.isArray(array)) return [];
  const result = array.slice();
  for(let value of values) {
    if(Array.isArray(value)) {
      for(let v of value) {
        result.push(v);
      }
    } else {
      result.push(value);
    }
  }
  return result;
}


// 源码思路： 使用flatten函数扁平（一层）接收到的参数列表，并使用自定义函数arrayPush整体push
// array 不是数组处理成数组 [array]
