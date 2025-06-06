// 函數作為參數：filterArray(arr, predicate)
function filterArray(arr, predicate) {
  return arr.filter(predicate);
}

console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 
// [2, 4]