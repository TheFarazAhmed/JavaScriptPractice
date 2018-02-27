//TASK 8-11 _ 1
var w=prompt("Enter Your Name: ");
alert("Hi, "+w);

//TASK 8-11 _ 2
var v=+prompt("Enter Table Number to display ");
if(v === 0)
{
    for(var i=1 ; i<=10 ; i++)
    document.writeln("<br>  5  x " + i + " = " + 5*i);
   }
else
{
    var j=+prompt("Limit of Table ");
    for(var i=1 ; i<=j ; i++)
        document.writeln("<br> "+ v +" x " + i + " = " + v*i);
}

//TASK 8-11 _ 3
var v1=prompt("Enter City ");
if(v1 === "Karachi")
    alert("Welcome to the city of lights");

//TASK 8-11 _ 4
var v2=prompt("Your gender ");
if(v2 === "male")
    alert("Good morning sir");
else if(v2 === "female")
    alert("Good morning madam");

//TASK 8-11 _ 5
var v3=prompt("Signal Color ?? ");
if(v3 === "red")
    alert("vehicles must stop");
else if (v3 === "yellow")
    alert("vehicles should get ready to move");
else if (v3 === "green")
    alert("vehicles move now");

//TASK 8-11 _ 6
var v4=prompt("Max Age ?? ");
var v5=prompt("Current Age ?? ");
if(v5 <= v4)
    alert (" You are welcome");

 // TASK 8-11 _ 7   
var v6 = +prompt("Enter remaining feul ??");
if(v6 < 0.25)
    alert("Please refill the fuel in your car");

// TASK 8-11 _ 8 Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}

// // TASK 8-11 _ 9
// Percentage % Grade Remarks
// Greater than or equal to 80 A-one Excellent
// Greater than or equal to 70 A Good
// Greater than or equal to 60 B You need to improve
// Less than 60 Fail Sorry
var s1=+prompt("Enter marks of Subject No. 1 = ");
var s2=+prompt("Enter marks of Subject No. 2 = ");
var s3=+prompt("Enter marks of Subject No. 3 = ");
var maxmarks=+prompt("Enter Total Max marks = ");
var perc = ((s1+s2+s3)/maxmarks)*100;
alert("Total Marks " + maxmarks);
alert("Obtained Marks "+ s1+s2+s3 );
alert("Percentage " + perc);
if(perc > 80)
    alert("Grade A-one , Remarks EXCELLENT");
else if(perc >= 70 && perc < 80)
    alert("Grade A , Remarks GooD");
else if(perc >= 60 && perc < 70)
    alert("Grade B , Remarks YOU NEED TO IMPROVE");
else if (perc < 60)
    alert("Grade Fail , Remarks SORRY");

// TASK 8-11 _ 10
var name1 = prompt("Name of item 1");
var name2 = prompt("Name of item 2");
var price1 = prompt("Price of item 1");
var price2 = prompt("Price of item 2");
var q1 = prompt("Order Quantity of item 1");
var q2 = prompt("Order Quantity of item 2");
var shipping = prompt("Shipping charged");
var t1 = q1*price1 + q2*price2 + shipping;
var disc = t1;
if(t1 < 2000)
{
    disc = t1  -  (t1 * 0.10);
}
document.writeln("<br> Price of "+ name1 + " is " + price1);
document.writeln("<br> Quantity of "+ name1 + " is " + q1);

document.writeln("<br> Price of "+ name2 + " is " + price2);
document.writeln("<br> Quantity of "+ name2 + " is " + q2);

document.writeln("<br><br> Shipping Charges "+ shipping);

document.writeln("<br><br> Total Cost of your order is " + t1);
document.writeln("<br>Discounted Price is " + disc);

// TASK 8-11 _ 11
var secret = 6 ;
var guess = +prompt("Guess the Number (between 1-to-10)");
if(guess === secret)
    document.writeln("<br> Bingo, Correct Answer");
else if ( guess === secret - 1  || guess === secret + 1)
    document.writeln("<br> Close enough to the correct answer");

// TASK 8-11 _ 12
var three = +prompt("Enter a number");
if((three % 3 )=== 0)
    document.writeln("<br><br> The Number you Entered is Divisible by 3");

// TASK 8-11 _ 13
var team1 = prompt("Enter 1st team name ");
var team2 = prompt("Enter 2nd team name ");
var score1 = prompt("Enter 1st Team's Score ");
var score2 = prompt("Enter 2nd Team's Score ");
if(score1 < score2)
    document.writeln("<br>WINNING TEAM " + team2);
else if (score1 > score2)
    document.writeln("<br>WINNING TEAM " + team1);
else if(score1 === score2)
    document.writeln("<br>There is a Tie");

// TASK 8-11 _ 14
var stringg = "Pakistan";
var numberr = 92;
var truee = true;
document.writeln("<br> TYPE OF " + stringg + "is " + typeof(stringg) );
document.writeln("<br> TYPE OF " + numberr + "is " + typeof(numberr) );
document.writeln("<br> TYPE OF " + truee + "is " + typeof(truee) );

// TASK 8-11 _ 15
var evenodd = +prompt("enter a number");
if((evenodd%2)==0)
    document.writeln("<br> The Number you entered is Even");
else
    document.writeln("<br> The Number you entered is Odd");

// TASK 8-11 _ 16
var temp = +prompt("Enter Temperature");
if(temp > 40)
    document.writeln("<br>It is too hot outside");
else if(temp > 30)
    document.writeln("<br>The Weather today is Normal");
else  if(temp > 20)
    document.writeln("<br>Today's weather is cool");
else  if(temp > 10)
    document.writeln("<br>OMG! Today’s weather is so cool");

// TASK 8-11 _ 17
var n1 = +prompt("Enter 1st number");
var n2 =  +prompt("Enter 2nd number");
var op = prompt("Enter operator");
switch(op) {
case "+" :
alert(n1 + op + n2 + " = " + n1+n2);
break;
case "-" :
alert(n1 + op + n2 + " = " + n1-n2);
break;
case "*" :
alert(n1 + op + n2 + " = " + n1*n2);
break;
case "/" :
alert(n1 + op + n2 + " = " + n1/n2);
break;
case "%" :
alert(n1 + op + n2 + " = " + n1%n2);
break;
default :
alert("Invalid Operator");
break;
}

// TASK 8-11 _ 18 
var din = prompt("what day is today");
switch(din) {
    case "Sunday" :
        alert("Yay it's a holiday");
        break;
    case "Saturday":
        alert("it's weekend");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        alert("it's a weekend");
        break;
    default:    
        alert("Invalid Input of Day ")
}

// TASK 8-11_ 19
var userscore = +prompt("Enter User's Score");
if(userscore > 50)
    alert("You are passed");
else
    alert("Try again");

// TASK 8-11 _ 20
var nn1=+prompt("1st number");
var nn2=+prompt("2nd number");
if(nn1 < nn2)
    alert("2nd number is greater");
else if(nn1 > nn2)
    alert("1st number is greater");
else
    alert("Both numbers are equal");

//TASK 8-11 _ 20
var aaa = +prompt("Enter a number");
var bbb = +prompt("Enter a number");

if (aaa == bbb)
    alert("Both are Equal");
 else if(aaa>bbb)
     alert("The greater number between " + a + " and " + b + " is " + a);
 else
     alert("The greater number between " + a + " and " + b + " is " + b);

// task 8-11 _ 21
var cd = prompt("Enter language code (for eexample en, de, es)", "en");
 if(cd == "en"){
     alert("Hello World");
 }
 else if(cd == "de"){
     alert("Hallo Welt");
 }
 else if(cd == "es"){
     alert("Hola Mundo");
 }
 else{
     alert("Invalid Code");
 }


// TASK 8-11 _ 22
var num = +prompt("Enter a number");
 if(num > 0){
     alert("It's a positive number");
 }
 else if(num < 0){
     alert("It's a negative number");
 }
else{
     alert("It's a ZERO");
 }

//  TASK 8- 11 _ 23
var nn3 = +prompt("Enter number greater than zero (0)");
var noun = prompt("Enter noun");

 if(nn3 == 1){
     alert(nn3 + " " + noun);
 }
 else{
     alert(nn3 + " " + noun + "s");
 }

// TASK 12-13 _ 1
var num = +prompt("Enter a number")
 if(num%3 == 0){
     alert("Entered number is divisble by 3")
 }
 else{
     alert("Number is not divisible by 3")
 }

 // TASK 12-13 _ 2
 var num = +prompt("enter a number")
 if (num%2 == 0){
     alert("Entered number is even")
 }
 else{
     alert("entered umber is odd")
 }

// TASK 12-13 _ 3
 var age = +prompt("Enter age")
 if(age > 18){
     alert("Old Enough")
 }
 else{
     alert("Too Young")
 }


// TASK 12-13 _ 4
 var name1 = prompt("Enter name");
 name1 = name1.toLocaleLowerCase();
 if (name1 == "faraz"){
    alert("Hello "+name1)
 }



// TASK 12-13 _ 5
 var nn4 = +prompt("Enter a number")
 switch(nn4 % 3){
     case 0 : 
     alert("Number is divisible by 3")
     case 2 :
     alert("Number is not divisible by 3")
     case 1 :
     alert("Number is not divisible by 3")
 }

// TASK 12-13 _ 6
 var ch = prompt("Enter a char")
 if (ch>=65 && ch<=90)
 	alert("Character is a capital letter");
 else if (ch>=97 && ch<=122)
 		alert("Character is a small letter")
 else if (ch>=48 && ch<=57)
 		alert("Character is a digit")
 else if ( 
             (ch>0 && ch<=47)||(ch>=58 && ch<=64)|| (ch>=91 && ch<=96)||(ch>=123 && ch<=127)
         )
 		alert("Character is a special symbol")

// TASK 12-13 _ 7
 var a = +prompt("Enter a number")
 var b = +prompt("Enter a number")
 var oper = prompt("Enter the operation", "+, -, x, /, %")

 switch(oper){
    case "+":
     var c = a + b;
     alert(a + " + " + b + " = " + c)
     break;
    case "-":
    var c = a - b;
    alert(a + " - " + b + " = " + c)
     break;
   case "x":
    var c = a * b;
    alert(a + " x " + b + " = " + c)
    break
   case "/":
     var c = a / b;
     alert(a + " / " + b + " = " + c)
     break
   case "%":
     var c = a % b;
     alert(a + " % " + b + " = " + c)
     break
 }


// TASK 12-13 _ 8
 var time = +prompt("Enter time in 24 hour format","form 0000 to 2359")

if(time >=0000 && time < 1200){
     alert("Good Morning")
 }
 else if(time >= 1200 && time < 1700){
     alert("Good Afternoon")
 }
 else if(time >= 1700 && time < 2100){
     alert("Good Evening")
 }
 else if(time >= 2100 && time < 2359){
     alert("Good Night")
 }
 else{
     alert("Invalid format")
 }

// TASK 12-13 _ 9
 var year = +prompt("Enter year", "YYYY")
 if(year%4 == 0){
     alert("It's a leap year")
 }
 else{
     alert("Not a leap year")
 }

// TASK 12-13 _ 10
 var pass = prompt("Password :")
 if (pass == ""){
     alert("Please, enter your password")
 }
 else if(pass == "abcxyz"){
     alert("Correct! The password you entered matches the original password")
 }
 else{
     alert("Incorrect Password")
 }


// TASK 12-13 _ 11
var firstName = "ahmed"; 
if (firstName === "faraz") {        
     document.write("Hello faraz!"); 
 } 
 else{
     document.write("You are not faraz");
 }

// TASK 12-13 _ 12
var greeting;         
var hour = 13;         
 if (hour < 18) {             
    greeting = "Good day";   
 }     
 else{       
    greeting = "Good evening";         
 } 


// TASK 12-13 _ 13
 var a = +prompt("Enter a number")
 var b = +prompt("Enter a number")
 if (a == b){
    alert("Both are Equal")
}
else if(a>b)
     alert("The greater number between " + a + " and " + b + " is " + a)
else
     alert("The greater number between " + a + " and " + b + " is " + b)


// TASK 12-13 _ 14
 var num = +prompt("Enter a number")
 if(num > 0){
     alert("It's a positive number")
 }
 else if(num < 0){
     alert("It's a negative number")
 }
 else{
     alert("It's a ZERO")
 }

// TASK 12-13 _ 15
 var time = +prompt("Enter time in 24 hour format")
 if(time >= 6 && time <= 9){
     alert("Breakfast is served")
 }
 else if(time >= 11 && time <= 13){
     alert("Time for Lunch")
 }
 else if(time >= 17 && time <= 20){
     alert("It's dinner time")
 }
 else{
     alert("Sorry, you'll have to wait, or go get a snack")
 }

// TASK 12-13 _ 16
 var variable = prompt("Enter the value")
 alert(typeof(variable))


// TASK 12-13 _ 17
 var char = prompt("Enter a letter")
 if( char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
     alert("It's a vowel")
 }
 else{
     alert("It's not a vowel")
 }

// TASK 12-13 _ 18
 if ( 100 != 80 ){
     alert("True")
 }

// TASK 12-13 _ 19
 var monthh = +prompt("Enter month in number","number of month")
 switch(monthh){
     case 1 :
     alert("January")
     break
     case 2 :
     alert("February")
     break
     case 3 :
     alert("March")
     break
     case 4 :
     alert("April")
     break
     case 5 :
     alert("May")
     break
     case 6 :
     alert("June")
    break
     case 7 :
     alert("July")
     break
    case 8 :
     alert("August")
     break
     case 9 :
    alert("September")
    break
   case 10 :
    alert("October")
     break
    case 11 :
    alert("November")
    break
    case 12 :
    alert("December")
    break
    default:
    alert("Invalid Month")
 }

// TASK 12-13 _ 20
var age1 = +prompt("Enter your age")
 age1 < 18 ? alert("TOO YOUNG") : alert("OLD ENOUGH");
