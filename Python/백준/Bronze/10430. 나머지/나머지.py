import sys

input_line = sys.stdin.readline().split()

a, b, c = map(int, input_line)

print((a + b) % c)
print(((a % c)+(b % c)) % c)
print((a * b) % c)
print(((a % c) * (b % c)) % c)