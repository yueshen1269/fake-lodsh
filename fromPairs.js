function _fromPairs(pairsArray) {
  if(!Array.isArray(pairsArray)) {
    return {};
  }
  const result = {};
  const len = pairsArray.length;
  for(let pairs of pairsArray) {
    if(!Array.isArray(pairs) || pairs.length !== 2) {
      return {};
    } else {
      const [key, val] = pairs;
      result[String(key)] = val;
    }
  }
  return result;
}
