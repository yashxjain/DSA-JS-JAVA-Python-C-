/*Description
The factorial of a positive integer N is the product of all positive integers less than or equal to n:
Given a number N your task is to write a program that calculates factorial of N
Input
Input Format
First and the only line contains N
Constraints
N«15
Output
Output the factorial value of N
Sample Input 1
Sampla
120
Hint
Sample Explanation
Factorial of 5 = 54*3*211 - 120*/


function runProgram(input) {
    // Write code here
    num = input.trim()
    factorial(num)
}
function factorial(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    console.log(fac)
}
if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}