import sys

a = int(input())

list = []

for i in range(a) :
  a, b = map(int, sys.stdin.readline().split())
  list.append(a+b)

for x in list :
  print(x)