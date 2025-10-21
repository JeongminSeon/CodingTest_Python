import sys

a, b = map(int, sys.stdin.readline().split())
c = int(sys.stdin.readline())

time = a * 60 + b + c

print(str(time // 60 % 24) + ' ' + str(time % 60))