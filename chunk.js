// 第一次实现_chunk函数
// 时间：2019年11月25日10:08:25
function _chunk(array, size = 1) {
  if(size<=0) throw new Error("size has to be greater than 0");
  if(Array.isArray(array)) throw new Error("array has to be an array");
  if(size===1) return array.slice();
  const len = array.length;
  const result = [];
  let temp = [];
  for(let i=0; i<len; i++) {
    temp.push(array[i]);
    if(i%size === size-1 || i === len-1) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}
