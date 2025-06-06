# 字典轉換為字串
def dict_to_string(d):
    return ', '.join(f"{key}:{value}" for key, value in d.items())

# 範例：
# dict_to_string({'a': 1, 'b': 2}) ➝ "a:1, b:2"