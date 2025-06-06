// 計算字串中字母出現的次數：countLetters(str)
function countLetters(str) {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
}

console.log(countLetters("banana")); 
// Map { 'b' => 1, 'a' => 3, 'n' => 2 }