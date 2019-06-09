# 最大公约数

greatest common divisor

## 欧几里得算法（辗转相除法）

用大数除以小数，再用余数（第一余数）去除除数，再用余数（第二余数）去除第一余数，如此返回，直到最后余数为0为止。最后的除数就是最大公约数。

## 更相减损法（辗转相减法）

1. 以较大的数减较小的数，将较小的数与差进行比较，并以大数减小数。继续如此，直到减数和差相等位置。
2. 约掉的2乘以第二步的差就是最大公约数。

## stein 算法

1. 两者有一个为0 则另一个为最大公约数
2. A<sub>1</sub> = A, B<sub>1</sub> = B, C<sub>1</sub> = 1
3. 如果二者都为偶数则， A<sub>n + 1</sub> = A<sub>n</sub> / 2, B<sub>n + 1</sub> = B<sub>n</sub> / 2, C<sub>n + 1</sub> = C<sub>n</sub> * 2(乘以2只需要整数左移一位即可)
4. 如果A<sub>n</sub>为偶数则, A<sub>n + 1</sub> = A<sub>n</sub> / 2, B<sub>n + 1</sub> = B<sub>n</sub>, C<sub>n + 1</sub> = C<sub>n</sub>
5. 如果B<sub>n</sub>为偶数则, B<sub>n + 1</sub> = B<sub>n</sub> / 2, A<sub>n + 1</sub> = A<sub>n</sub>, C<sub>n + 1</sub> = C<sub>n</sub>
6. 如果二者都为奇数则，A<sub>n + 1</sub> = |A<sub>n</sub> - B<sub>n</sub>|, B<sub>n + 1</sub> = min(A<sub>n</sub>, B<sub>n</sub>), C<sub>n + 1</sub> = C<sub>n</sub>