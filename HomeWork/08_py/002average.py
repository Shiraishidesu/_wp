# 計算平均值
def average(nums) :
    if not nums :
        return None
    count = 0
    total = 0
    for n in nums[0:] :
        count += 1
        total = n + total
        ave = 0
        ave = total / count
    return ave
a = [0,2,9,6]
# average(a)
print('%.1f' % average(a))