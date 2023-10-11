import sys
sys.set_int_max_str_digits(0)

with open("pi10million.txt", "rb") as f:
    x = f.read()[:1_000_000]
    print(len(x))
    x = bin(int(x))[2:]

with open("pi_1mil.js", "w+") as f:
    f.write("let pi_bin = \"" + x + "\"")

print(len(x))
