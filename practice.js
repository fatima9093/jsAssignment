const prompt = require("prompt-sync")()

//question no 1

// let age=prompt("enter your age")
// if(age>=10 && age<=20){
//     console.log("you are a teenager")
// }
// else{
//     console.log("you are a kid")
// }

//question no 2

// let marks=75
// let grade=''
// switch(true){
//     case (marks>=90 && marks<=100):
//         grade='A';
//         break;
//     case (marks>=80 && marks<=90):
//         grade='B';
//         break;
//     case (marks>=70 && marks<=80):
//         grade='C'
//         break;
//     case (marks>=60 && marks<=70):
//         grade='D'
//         break;
//     case (marks>=50 && marks<=60):
//         grade='F'
//         break; 
//     default:
//         grade='grade are invalid';
// }
// console.log("Students marks ",marks)
// console.log("student grades",grade)

//question no 3

// let number=30
// if(number%2==0 && number%3==0){
//     console.log(number," is divisible by both 2 and 3 ")
// }
// else{
//     console.log(number,"is not divisible")
// }

// question no 4

// let number=31
// if(number%2==0 || number%3==0){
//     console.log(number," is divisible by either 2 and 3 ")
// }
// else{
//     console.log(number,"is not divisible")
// }


//question no 5

// let age=13
// let driver=age>=18?"you are eligible":"you are not eligible"
// console.log(driver)

// let x=prompt("enter your age")
// console.log(x)

// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// const x=10
// const y=-17
// const z=50
// if(x>y && x>z){
//     if(y>z ){
//         console.log(x+","+y+","+z)
//     }
//     else{
//         console.log(x+","+z+","+y)
//     }
// }
// else if(y>x &&y>z){
//     if(x>z){
//         console.log(y+","+x+","+z)
//     }
//     else{
//         console.log(y+","+z+","+x)
//     }
// }
// else if(z>x &&z>y){
//     if(x>y){
//         console.log(z+","+x+","+y)
//     }
//     else{
//         console.log(z+","+y+","+x)
//     }
// }

// . Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(let i=0;i<=15;i++){
//     if(i%2==0){
//         console.log(i, " is even ")
//     }
//     else if(i%2!=0){
//         console.log(i, " is odd ")
//     }
// }
// const student=[
//     {name:"Dawood",marks:77},
//     { name:"Mohsin",marks:77},
//     { name:"Awais",marks:88},
//     { name:"Ahsan",marks:95},
//     { name:"Fatima",marks:68}
// ]
// let totalMarks=0
// for(let i=0;i<student.length;i++){
//     totalMarks+=student[i].marks
// }

// const averageMarks=totalMarks/student.length

// console.log("Average marks",averageMarks)

// let grade;
// if(averageMarks<60){
//     grade="F"
// }
// else if(averageMarks<70){
//     grade="D"
// }
// else if(averageMarks<80){
//     grade="C"
// }
// else if(averageMarks<90){
//     grade="B"
// }
// else{
//     grade="F"
// }

// console.log("grade is ",grade)


// let number=4
// for(let i=0;i<=4;i++){
//     let pattren=''
//     for(let j=0;j<=i;j++){
//         pattren +='*'
//     }
//     console.log(pattren)
// }


// const mark={
//     asma:26,
//     hamid:66,
//     fatima:83,
//     mehmood:23
// }
// for (let i=0;i<Object.keys(mark).length;i++){
//     console.log("the marks of "+ Object.keys(mark)[i] + " are " + mark[Object.keys(mark)[i]])
// }

// for(let x in mark){
//     console.log("the marks of "+ x + " are " + mark[x])
// }



//with while loop

// let sum = 0;
// let number=parseInt(prompt("Enter a number: "));
// while (number>=0) {
//     sum += number;
//     number=parseInt(prompt("Enter a number: "));

// }
// console.log(`Sum of positive numbers entered: ${sum}`);



//with do while loop

// let sum = 0;
// let number=parseInt(prompt("Enter a number: "));
// do{
//     sum += number;
//     number=parseInt(prompt("Enter a number: "));

// }while (number>=0) 
// console.log(`Sum of positive numbers entered: ${sum}`);


// Q: 2. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

// for(let i=0;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log(i + " FizzBuzz ")
//     }
//     else if (i%3===0){
//         console.log(i + " Fizz")
//     }
//     else if (i%5===0){
//         console.log(i + " Buzz")
//     }
//     else{
//         console.log("")
//         console.log(i)
//     }
// }

// question no 17

// function reverseNumber(num){
//     num=num+'';
//     return num.split("").reverse().join("");
// }

// const x=32243
// console.log(Number(reverseNumber(x)))


// 1.Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// 2.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// 3. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
// 4. Write a function to print table data.
// 5. what will following print
// console.log("har \"".length)
//   6. Explore the includes, String slice(),String substring(),String trim() and String split()


// question no 1

// function checkPalindrome(str_entry){
//     let cstr=str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//     let count=0
//     if(cstr===''){
//         console.log("nothing Found")
//         return false
//     }
//     if((cstr.length))



// }


// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// console.log(first)
// function myFunction(value, index, array) {
//   return value > 18;
// }

// const arr=[1,2,3,4,5]
// let num;
// do{
//    num=Number.parseInt(prompt("enter a number"))
//   arr.push(num)
// }while(num!=0)
// console.log(arr)

// const arr=[1,3,10,11,40,50]
//  const arr2=arr.map((value)=>{
//   return value*value
// })
// console.log(arr2)

// const arr=[1,2,3,4,5,6]
// const arr2=arr.reduce((fact,value)=>{
//   return fact*value;
// })
// console.log(arr2)

// let count=0
// let num
// const randomNumber=Math.floor(Math.random()*100)

// function guess(){
//   num=Number.parseInt(prompt("enter a number"))
//   if(num<1 || num>100){
//     console.log("please enter a valid number between 1 and 100 . ")
//     return false
//   }

//   count++
//   if(num==randomNumber){
//     console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${count} guesses. Your score is ${100 - count}.`);
//   }
//   else if(num <randomNumber){
//     console.log("your number is greater than your guess")
//   }
//   else{
//     console.log("The number is lesser than your guess. Try again.");
//   }
//   return false
// }

// function startGame() {
//   while (!guess()) {}
// }

// startGame();

// let random=Number.parseInt(Math.random()*100)
// let inp
// let score=100
// while(inp!=random){
//   score=score-1
//   inp=Number.parseInt(prompt("enter a number"))
//   if(inp==random){
//     console.log("you guesses the correct number")
//     console.log(`you guesses the actual number in ${100-score} chances`)
//   }
//   else if(inp>random && inp<100){
//     console.log("your number is greater than the actual number ")
//   }
//   else if(inp < random && inp> 0){
//     console.log("your number is smaller than the actual number")
//   }
//   else{
//     console.log("the enter number is between 1 and 100")
//   }
// }

//question no 1
// function maximimNumber(num1,num2){
//   if(num1>num2){
//     return num1
//   }
//   else{
//     return num2
//   }
// }

// let num1=parseInt(prompt("enter 1st number "))
// let num2=parseInt(prompt("enter second number "))
// let num=maximimNumber(num1,num2)
// console.log("the maximum number is ",num)


//question no 2

// function maxNumber(num1,num2,num3){
//   let temp=num1
//   if(num2>temp){
//     temp=num2
//   }
//   if(num3>temp){
//     temp=num3
//   }
//   return temp

// }
// let num1=parseInt(prompt("enter 1st number "))
// let num2=parseInt(prompt("enter 2nd number "))
// let num3=parseInt(prompt("enter 3rd number "))
// let num=maxNumber(num1,num2,num3)
// console.log("the maximum number is ",num)


//question no 3

// let num=parseInt(prompt("enter a digit "))
// if(num>0){
//   console.log("the given number is positive")
// }
// else if(num<0){
//   console.log("the given number is negative")
//   }
// else{
//     console.log("the given number is zero")
//   }

//question no 4 
// let day
// switch(new Date().getDay()){
//     case 0:
//       day="Sunday"
//       break
//     case 1:
//       day="Monday"
//       break
//     case 2:
//       day="Tuesday"
//       break
//     case 3:
//       day="Wednesday"
//       break
//     case 4:
//       day="Thursday"
//       break
//     case 5:
//         day="friday"
//         break
//     case 6:
//         day="Saturday"
//         break
//     default:
//         day="invalid day"
// }
// let days=5
// console.log(day)

// question no 5
let year=2021
let month=parseInt(prompt("enter the month"))
let day
switch(month){
    case 1:
    
    case 3:

    case 5:

    case 7:

    case 8:

    case 10:

    case 12:
        day=31
        break
    case 4:

    case 6:

    case 9:

    case 11:
        day=30
        break
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
        || (year % 400 == 0))
        day = 29;
    else
       day = 28;
        
    break;

    default:
        day=-1
}

console.log(day)






