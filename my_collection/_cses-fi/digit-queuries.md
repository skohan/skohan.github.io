---
layout: cses-fi
date: 2021-06-28
author: skohan
link: https://cses.fi/problemset/task/2431/
category: introductory
explaination: >
 The brute force algorithm is not effiecient cause the value of `k` can go upto 10^18.
 We need algorithm of almost `O(logN)`. Instead of looping through every number,
 we can skip the numbers which might not have the index. For example, for index `13`
 we don't need to check for numbers from `1 to 9`, hence we skip them.
 
 
 For current number of digits, which is `1` initially, we calculate how much indexes
 will it cover. So, for numbers from `1 to 9`, they will cover indexes till 9.
 We find the number of minimum digits required in number to reach up to index `k`.
 Then we find the exact number which will include the `kth` index. And finally we
 find the index from that number.

references: []
---



```cpp

#!/usr/bin/env python3

import math

mod = int(1e9+7)

def the_number(k, digits):
    frm = pow(10, digits-1)
    to = pow(10, digits) - 1

    s = (to - frm + 1)*digits

    if k > s:
        return the_number(k-s, digits+1)

    req = frm + k//digits

    off = k%digits

    if off == 0:
        return (req-1)%10

    st = str(req)
    req = st[off-1]

    return int(req)

def solve():

    q = int(input())

    for _ in range(q):

        k = int(input())

        print(the_number(k,1))



t = 1
# t = int(input())

for _ in range(t):
    # print(f"Case #{_+1}: ", end="")
    solve()        




```
