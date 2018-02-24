// task 2 _ 1
var username;
// task 2 _ 2
var myName="faraz ahmed";
// task 2 _ 3
var message = "Hello World";
alert(message);
// task 2 _ 4
var age=25;
var address="PECHS";
var uni = "KU (DCS  UBIT)";
alert(myName);
alert(age);
alert(address);
alert(uni);

// task 2 _ 5
var arr="PIZZA";
for(var j=5;j>0;j--)
{
    document.writeln(arr.slice(0,j)+"<br>");
    //document.body.innerHTML="";
}

// task 2 _ 6
var noc=2;
var pname = "a beautiful woman";
var city = "England";
var job= "JS coder";
alert("You will be a " + job + " in " + city + ",married to " + pname + " with " + noc + " kids");

// task 2 _ 7
var e="someone@somewhere.com";
alert("My email address is " + e);
// task 2 _ 8
var book = "A smarter way to learn JavaScript";
alert(book);
// task 2 _ 9
alert("my name is " + myName);
alert("my age is " + age);
alert("my address is " + address);
alert("my univeristy is " + uni);
alert("i am a student of Saylani Mass Training , Web & Mob Dev");

// task 2 _ 10
document.writeln("Yay , I can write HTML content through Javascript");

// task 3 _ 1
var age = 60;
alert("i am "+age+" years old");
// task 3 _ 2
var n=100;
alert("you have visited this site "+n+" times");
// task 3 _ 3
var birthyear=1990;
document.writeln("My birth year is "+ birthyear);
document.writeln("Data type of my declared variable is "+ typeof(birthyear));

// task 3 _ 4
var a="Awesome Person";
var b="Trouser";
var c=3;
document.writeln("<br> " + a + " ordered " + c + " " + b + "(s) on XYZ Clothing store");
document.body.innerHTML="";

// task 4_1
var aa,bb,cc;
// 
//  ///////////////////////////
//        task 4 _ 2 (legal & illegal variable names)
// var a,b2,c_,d$, e_5;
// var 1a, b-1, 3c , "fff", while();

// task 5-7 _ 1 & 2
var x=+prompt("Enter 1st Number ");
var y=+prompt("Enter 2nd Number ");
alert("Sum is " + x+y);
alert("Subtract is "+ x-y);
alert("Multiply is "+ x*y);
alert("Divide is "+ x/y);
alert("Modulus / Remainder is "+ x%y);

//task 5-7 _ 3
var x1;
document.writeln("Value after variable declaration is: " + x1);
x1 = 3;
document.writeln("Value after initialization is: " + x1);
x1 = x1+1;
document.writeln("Value after increment is: " + x1);
x1 = x1 + 7
document.writeln("Value after addition is: " + x1);
x1 = x1-1;
document.writeln("Value after decrement is: " + x1);
x1 = x1 % 3;
document.writeln("the remainder is: " + x1);

// task 5-7 _ 4
var cost = 600;
var t = +prompt("How many tickets you want ??");
document.writeln("Total cost of buying " + t + " tickets is "+ t*cost);

// task 5-7 _ 5
var v=+prompt("Enter Table Number to display ");
var j=+prompt("Limit of Table ");
for(var i=1 ; i<=j ; i++)
    document.writeln("<br> "+ v +" x " + i " = " + v*i);

// task 5-7 _ 6
var far=+prompt("enter temperature in farenheit = ");
document.writeln(far+"<sup>O</sup> F is " + ((far-32)*(5/9)) + " <sup>O</sup> C");
var cel=+prompt("enter temperature in celsius = ");
document.writeln(cel+"<sup>O</sup> C is " + ((cel * 1.8) + 32) + " <sup>O</sup> F");

// task5-7 _ 7
var p1=560, i1=2, p2=200, i2=5, shp=150;
document.writeln("<br> Price of Item 1 is" + p1 + "<br> Quantity of item 1 is " + i1);
document.writeln("<br> Price of Item 2 is" + p2 + "<br> Quantity of item 2 is " + i2);
document.writeln("<br> Shipping Charges " + shp);
document.writeln("<br> ------------------------------------------------------------------- <br>");
document.writeln("<br> Total cost of your order is " + ( (p1*i1)+(p2*i2)+shp )  );

// task 5-7 _ 8
var tot=+prompt("Enter Total Maximum Marks");
var obt=+prompt("Enter Obtained Marks");
document.writeln("Percentage is " + (obt/tot * 100.0));

// task 5-7 _ 9
var pkr = 1740;
document.writeln("<br> Total Currency in PKR : " + pkr);
document.writeln("<br> Converted to SAR :" + pkr*28 + "  Converted to USD : " + pkr*104);

// task 5-7 _ 10
var x2=9;
alert( ((x2+5)*10)/2 );

// task 5-7 _ 11
var cy=2018;
var by=1990;
document.writeln("<br> Current Year : "+cy);
document.writeln("<br> Birth Year : "+by);
document.writeln("<br> Either "+ (cy-by) +" or " + (cy-by+1) +" years old");

// task 5-7 _ 12
var rd = 5;
document.writeln("<br> Radius is "+rd);
document.writeln("<br> Circumference is "+ 2*3.142*rd);
document.writeln("<br> The area is "+ 3.142*rd*rd);

// task 5-7 _ 13
var a=10;
document.writeln("<br> The value of a is :" + a);
document.writeln("<br> The value of ++a is :" + ++a);
document.writeln("<br> Now the value of a is :" + a);
document.writeln("<br> The value of a++ is :" + a++);
document.writeln("<br> Now the value of a is :" + a);
document.writeln("<br> The value of --a is :" + --a);
document.writeln("<br> Now the value of a is :" + a);
document.writeln("<br> The value of a-- is :" + a--);
document.writeln("<br> Now the value of a is :" + a);

// task 5-7 _ 14
a=2;
b=1;
document.writeln("<br> a = "+a);
document.writeln("<br> b = "+b);
result= --a - --b + ++b + b--;
document.writeln("<br> result is " + result);
// task 5-7 _ 15
var fav="Biryani";
var ca=25;
var ma=100;
var est=2;
document.writeln("You will need "+ ((ma-ca)*2+ fav + "to last you until the ripe old age of "+ma);
