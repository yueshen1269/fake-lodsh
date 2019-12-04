 function _flatten(array, depth) {
   const result = [];
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
