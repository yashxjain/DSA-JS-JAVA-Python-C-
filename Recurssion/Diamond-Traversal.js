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
function diamondTraversal(matrix) {
    //Write your code over here
   var res="";
   var i=(matrix.length-1)/2;
   var j=matrix.length-1;
   
   while(i>=0 && j>=(matrix.length-1)/2){
       res+=matrix[i][j]+" ";
       i--;
       j--;
   }
   i=1;
   j=((matrix.length-1)/2)-1;
   while(i<=(matrix.length-1)/2 && j>=0){
       res+=matrix[i][j]+" ";
       i++;
       j--;
   }
   
   i=(matrix.length+1)/2;
   j=1;
   while(i<matrix.length && j<(matrix.length-1)){
       res+=matrix[i][j]+" ";
       i++;
       j++;
   }
   
   i=(matrix.length-2);
   j=((matrix.length-1)/2)+1;
   while(i>(matrix.length-1)/2 &&j<matrix.length-1){
       res+=matrix[i][j]+" ";
       i--;
       j++;
   }
   console.log(res)
  }