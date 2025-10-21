import sys

total = int(input())
n = int(input())
sum = 0

for i in range(n):
  a, b = map(int, sys.stdin.readline().split())
  sum += a * b

if sum == total :
  print('Yes')
else :
  print('No')
