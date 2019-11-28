 function _flatten(array, depth) {
   const result = [];
   // TODO: 实现Infinity
  //  if(depth == Infinity) flag = true;
   for (let value of array) {
     if(Array.isArray(value) && depth > 0) {
       if(depth > 1) {
        result.push(..._flatten(value, depth-1));
       } else {
         result.push(...value);
       }
     } else {
       result.push(value);
     }
   }
   return result;
 }
