import sys

input_line = sys.stdin.readlines()

for line in input_line :
  line = line.rstrip()
  a , b = map(int, line.split())
  if line : 
    print(a+b)