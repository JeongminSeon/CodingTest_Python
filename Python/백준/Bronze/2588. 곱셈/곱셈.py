import sys

input_line = sys.stdin.readline

a = int(input_line().rstrip())
b_str = input_line().rstrip()

b_one = int(b_str[2])
b_ten = int(b_str[1])
b_hundred = int(b_str[0])

result_3 = a * b_one 
result_4 = a * b_ten
result_5 = a * b_hundred

result_6 = a * int(b_str)

print(result_3)
print(result_4)
print(result_5)
print(result_6)