import sys
a, b = map(int, sys.stdin.readline().split())

b -= 45

if b < 0 :
  b += 60
  a -= 1

if a < 0 :
  a += 24

print(f"{a} {b}")

