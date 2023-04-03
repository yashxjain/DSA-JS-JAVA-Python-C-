/*Description
We define super digit of an integer N using the follovwing rules:
IfN has only 1 digit, then its super digit is N
Otherwise, the super digit of N is equal to the super digit of the sum of the digits of N.
Given an integer, find the super digit of the integer
Input
Input Format
The first line contains the number of testcase T
For each testcase:
The first and only line contains the number N
Constraints
1cTc10
1c=Nc=10(104)
Output
For each testcase, print the super digit in a new line
Sample Input 1
Sample Output 1
45
186
*/
function Digit(n) {

    if (+n < 10) {
        return n
    }

    let add = 0

    for (let i = 0; i < n.length; i++) {
        add += +n[i]
    }
    n = add + ""
    return Digit(n)
}