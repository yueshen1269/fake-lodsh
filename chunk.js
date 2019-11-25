// 第一次实现_chunk函数
// 时间：2019年11月25日10:08:25
function _chunk(array, size = 1) {
  if(size<=0) throw new Error("size has to be greater than 0");
  if(!Array.isArray(array)) throw new Error("array has to be an array");
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

// 第二次实现_chunk函数， 2019年11月25日10:39:33
// 看了源码后的改进：
// 1. 处理size类型为整形，并且异常值的情况下输出边界值[]，不再抛出异常
// 2. result数组长度计算
// 3. 使用while代替for循环，整体赋值，不用push并取余判断
function _chunk2(array, size = 1) {
  size = Math.max(parseInt(size), 0);
  if(!size || !Array.isArray(array) || !array.length) return [];
  if(size===1) return array.slice();
  const len = array.length;
  const result = new Array(Math.ceil(len / size));
  let index = 0,
      rstIndex = 0;
  while(index < len) {
    result[rstIndex++] = array.slice(index, index + size);
    index += size;
  }
  return result;
}
