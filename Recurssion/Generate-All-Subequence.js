/*
Description
A String is a subsequenoe af a given String, that is generated by deleting some character af a given siring withaut changing its order
You are given a string S. You have to generate all the subsequences of the string S using a recursive approach (dupicates allawed)
Input
Input Format:
First line Dt ihe input contans kength ot the string
Second line af the test case contains he string S
Constralnta:
18
n
Output
Output all the substring in a particular order. To understand the order Df prining, see the sample test cas explanation
Sample Output 1
Sample Input 1
ab
abcd
bd
Hint
output Explanation
First oulput al the subsequences slarting with first character. VWhen all such subsequences got printed, then move to print all such starting with secand chars, and so an
*/

function runProgram(input) {
    let str = input.trim().split("\n")
    let l = Number(str[0])
    let string = str[1].trim().split("");
    let new_str = [];
    let i = 0;
    vKs(string, new_str, i)
}

const vKs = (str, new_str, i) => {
    if (new_str.length != 0) {
        console.log(new_str.join(""))
    }
    if (new_str.length == str.length) {
        return;
    }
    let j = i;
    while (j < str.length) {
        new_str.push(str[j])
        vKs(str, new_str, j + 1)
        new_str.pop();
        j++
    }
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
