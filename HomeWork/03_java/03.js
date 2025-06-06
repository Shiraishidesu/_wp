// 建立一個陣列 numbers = [3, 7, 1, 9, 4]。
// 將陣列中的數字由小到大排序，並輸出結果。
// 可以直接用 sort 函數
let numbers = [3, 7, 1, 9, 4];
numbers.sort((x, y) => x - y);
console.log(numbers); // 輸出：[1, 3, 4, 7, 9]