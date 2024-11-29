
count = 0

def printNumber(n, count):
    print("|%5d " % (n), end='')
    count = count + 1
    if count == 10:
        print(" |")
        count = 0
    return count

for i in range(0, 1000):
    count = printNumber(i, count)