# 判斷質數
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# 範例：
# is_prime(7) ➝ True
# is_prime(10) ➝ False