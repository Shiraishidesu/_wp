# 計算字元出現次數
def count_chars(s):
    result = {}
    for char in s:
        result[char] = result.get(char, 0) + 1
    return result

# 範例：
# count_chars("hello") ➝ {'h': 1, 'e': 1, 'l': 2, 'o': 1}