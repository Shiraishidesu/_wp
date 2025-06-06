# 找出 list 中出現次數最多的數字
def most_common(nums):
    count = {}
    for num in nums:
        count[num] = count.get(num, 0) + 1
    max_count = max(count.values())
    for num, freq in count.items():
        if freq == max_count:
            return num

# 範例：
# most_common([1, 2, 2, 3, 3, 3]) ➝ 3