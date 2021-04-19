//******************* chapter 1****************************



// 1. Write a script to greet your website visitor using JS alert 
// alert("welcome to my website");
// Q2. Write a script to display following message on your web 
// alert("Error! Please enter a valid password")
// Q3. Write a script to display following message on your web page
// alert("Welcome JS Land... \n happy coding " );
// Q4. Write a script to display following messages in sequence:
// alert("Welcome to JS land");
// alert("Happy coding\n Prevent this page creating from additional dialouge" );
// Q5. Generate the following message through browser’s developer console:
// alert("Hello..., I can run JS through my web browser's console");
// Q6. Make use of alerts in your new/existing HTML & CSS project
// done check in html
// Q7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// done check in html/

//******************* chapter 2***************************
// Q1. DEclare a variable called username
// var username;
// Q2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName =" Tooba Fazal ";
// alert(myName);
// Q3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
// var js = "Hello World";
// alert(js);
// Q4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var std_name = "JOhn Doe"; 
// alert(std_name);
// var std_age = 15; 
// alert("I am" + " "+ std_age + " "+ "years old");
// var std_course = "Certified Web designing and development"; 
// alert(std_course);
// Q5. Write a script to display the following alert using one JS variable:
// alert(" Pizza \n Pizz \n Piz \n Pi \n P");
// Q6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use string concatenation)
// var email = "Toobafazal75@gmail.com";
// alert("My email address is: \n " + email);
// Q7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following message in an alert box:
// var msg = "I am trying to learn from the book A Smarter Way \n to Learn Javascript";
// alert(msg);
// Q8. Write a script to display this in browser through JS
// document.write("Yah ! I can write HTML content through JavaScript");
// Q9. Store following string in a variable and show in alert and browser through JS
// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");


//******************* chapter 3****************************
// Q1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = +prompt("Enter your age?") ;
// alert("I am " + age + " years old");

// Q2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
//  var visit = 15 ;
//  alert( "I have visited to sites " + visit + " times");

// Q3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
//  var birthYear = +prompt( "Enter your Birth Year");
// //  document.write("My birth Year is " + birthYear+ " <br/>" + "Data type of declare variable is Number");
// Q4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
//  var customer_name = ( " <b>John Doe </b>"); 
//  var customer_order =( " <b> 5 shirt(s) </b>");
//  var website = " <b> XYZ online store </b>";
//  document.write( customer_name +  " Ordered " + customer_order + " on " + website);


//******************* chapter 4****************************
// Q1.Declare 3 variable name in one statement 
// var a = 3, b = 4, c = 5;
// document.write(a+b+c);
// Q2. Declare 5 legall and 5 illegal variable name;
// *************** illegal variable *****************************
// 1) var @alert;
// 2) var %hi;
// 3) var  Tooba;
// 4) var 333;
// 5) var hello world;
// // ************************legal variable*************************
//  var a =3;
//  var $tooba;
//  var tooba_fazal;
//  var tooba555;
//  var toobaFazal

// Q.4 Display your Browser
// document.write(`"<h1> Rules  for naming JS Variable </h1> <br/><br/> 
// b) Variable names can only contain ___$___, ___'_'___,___uppercase___ and ____lowercase__.<br/>
// ___$__. For example $name, _name or name</br/>
// d) Variable names are case ___sensitive______<br/>
// e) Variable names should not be JS ___keyword______<br/>
// "`);



//******************* chapter 5****************************
// Q.1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var a= +prompt("enter a number");
// var b = +prompt("enter an second number");
// var c = a + b;
// document.write("Sum of " + a + " and " + b + " is " + c);

// Q2. Repeat task1 for subtraction, multiplication, division & modulus

// subtract

// var a= +prompt("enter a number");
// var b = +prompt("enter an second number");
// var c = a - b;
// document.write("Subtarct of " + a + " and " + b + " is " + c);


// Multiply

// var a= +prompt("enter a number");
// var b = +prompt("enter an second number");
// var c = a * b;
// document.write("Multiply of " + a + " and " + b + " is " + c);

// Modulus

// var a= +prompt("enter a number");
// var b = +prompt("enter an second number");
// var c = a % b;
// document.write("Remindor of " + a + " and " + b + " is " + c);

// Q.3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// // l. Output : “The remainder is : 0”.
// var value;
// var value = 5 ,a = ++value, b = 7 ;
// var c = a + b;
// var d = b % a;
// document.write("value after decalartion is undefined");
// document.write("<br>");
// document.write(" <br/>value after increament is "+ a +"<br/>");
// document.write(" <br/>value after addition is "+ c +"<br/>");
// document.write(" <br/>value after decreament is "+ --c +"<br/>");
// document.write(" <br/>value after increament is "+ a +"<br/>");
// document.write(" <br/>value after Reminder is "+ d +"<br/>");
// Q4. Cost of one movie ticket is 600 PKR. Write a script to 
// // store ticket price in a variable & calculate the cost of buying 5ticto a movie. Example output:kets
// var ticket = 500;
// var total = ticket * 6;
// document.write("Total cost to buy 5 tickets to a movie is "+ total + " PKR");

// // Q5. Write a script to display multiplication table of any number in your browser. 
// var a = 4;

// document.write("Table of 4");

// document.write("<br>" +a + " x " + 1 + " = " + a*1 );
// document.write("<br>"+ a + " x " + 2 + " = " + a*2);
// document.write("<br>" +a + " x " + 3 + " = " + a*3);
// document.write("<br>"+a + " x " + 4 + " = " + a*4);
// document.write("<br>"+a + " x " + 5 + " = " + a*5);
// document.write("<br>"+ a + " x " + 6 + " = " + a*6);
// document.write("<br>" + a + " x " + 7 + " = " + a*7);
// document.write("<br>"+ a + " x " + 8 + " = " + a*8);
// document.write("<br>" +a + " x " + 9 + " = " + a*9);
// document.write("<br>"+ a + " x " + 10 + " = " + a*10);
 
// Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
//  var F = +prompt("enter the value of farenheiht");
//  var formula = ((F - 32) * 5/9);
//  document.write("the answer is" + formula + "F");
//  var C = +prompt("enter the value of celsius");
// var celsius =(c * 9/5) +32;
// document.write("the answer is" + celcius +"C");
// Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// var pr1 = 100;
// var pr2 = 200;
// var ordr_quantity = 5;
// var order_quatity2 = 10;
// var shipping = 50;
// var total1 = 100 * 5;
// var total = 200 * 10;
// var c = total1 + total +50;
// document.write("<h1>Shopping Cart</h1>" );

// document.write("<br>Price of item 1 is " + pr1 );
// document.write("<br>Price of item 2 is " + pr2 );
// document.write("<br>Quantity of item 1 is " + ordr_quantity);
// document.write("<br>Quantity of item 1 is " + order_quatity2 );
// document.write("<br><br><br>Shipping charges " + shipping);
// document.write("<br>Total amount is "+ c );
// // Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
// var std_mark1 =50;
// var std_mark2 = 60;
// var x = std_mark1 + std_mark2 ;
// var y = (x / 200 )* 100;
// document.write("<h1> Mark Sheet</h1>");
// document.write(" <br>Total marks  is 200");
// document.write("<br>Total marks obtained is " + x);
// document.write(" <br>Your percentage is "+y);
// Q9 .9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// document.write("<h1> CURRENCY TO PKR</h1>");
// var dollar = 10 * 104.80;
// var riyal = 25 * 28;
// var PKR = dollar + riyal;
// document.write("Currency of PKR is "+PKR);
// Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// var a = 5 ;
// var b = 10 ;
// var c = 2;
// var z = (a +5)+(b*10)/(c);
// document.write(z);
// Q11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
//  var age = +prompt("enter your birthyear");
//  var current = 2021;
//  var x = current- age;
//  var y= current- age -1;

//  document.write("<h1> Age Calculator </h1>");
//  document.write("<br> Current year is " + current);
//  document.write("<br> Birth year is " + age);
//  document.write("<br> your age is " + x);
//  document.write("<br> possible 2 age  is " + y);
// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

//  document.write("<h1> The Geometrizoir </h1>");
// var radius = +prompt("enter radius");
// var pi = 3.142;
// var z = 2*pi*radius;
// var x = pi * radius* radius;  
//   document.write("<br> the radius is " + radius);
//    document.write("<br> Thye circumferences is" + z);
//   document.write("<br> The area is" + x);

// Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
//  var snack = "chocolate";
//  var currentage= 15;
//  var age = 65 ;
//  var amount = 3;
//  total = (3 * 65)-15;
//   document.write("<h1> The Lifetime Supply Calculator </h1>");
//     document.write("<br> your favourite snack is  " + snack);
//    document.write("<br> your current age is  " + currentage);
//    document.write("<br> maximum age is " + age);
//    document.write("<br> amount of snack per day " + amount);

//      document.write("<br> you need "+ total + snack+  " to last you untilthe ripe old age of " +age);


//******************* chapter 6 - 9 ****************************
// Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var a = 10 ;
// //    document.write("Result");
//    document.write("<br> The value of a is:  " + a);
//    document.write("<br> The value of ++a is:  " + ++a);
//    document.write("<br> <br> <br> Now the value of a is:  " + a);
//    document.write("<br> The value of a++ is:  " + a++);
//    document.write("<br> <br> <br> The value of a is:  " + a);
//    document.write("<br> The value of --a is:  " + --a);
//    document.write("<br> <br> <br> The value of a is:  " + a);
//    document.write("<br> The value of a-- is:  " + a--);
//       document.write("<br>  <br> <br>The value of a is:  " + a);


// Q2. What will be the output in variables a, b & result after execution of the following script: execution of the following script:
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// var a = 2, b = 1;

// var c= --a;
//     // (1-2)= 1
// var c= --a - --b;
// // (1-1)- (1-1)= 0
//  var c= --a - --b + ++b;
// // 0 - 0 + (0 + 1 ) =1
//  var c = --a - --b + ++b + b--;
// //  0 - (1-1)+ (1+0) +(1 -0)
//  2
//  alert(c);
//    document.write("<br>  The value of --a is:  1");
//    document.write("<br>  The value of --a - --b is:  1 ");
//    document.write("<br>  The value of --a - --b + ++b  is:  2" );
//    document.write("<br>  The value of --a - --b + ++b +b  is:  3");
//    document.write("<br> <br> <br> Result is:  3" );
// Q3. Write a program that takes input a name from user & greet the user.
// var your_name = prompt("Enter your name");
// //     document.write("<br> <br> Welcome to our website:  " + your_name );
// Q4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 should be displayed by default.

// var table =+prompt("enter your table number");
// var result;
// var a =5;
// if (table != 5){
// for(let i = 1; i <= 10; i++) {
//      result = i * table;

// document.write(table + "x" + i + "=" + result +"<br>");
// }
// }
// else{
//     document.write(a + "x" + i + "=" + result +"<br>");
// }


// Q5. a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable 
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)


// var sub1 = prompt("enter yoour first subject");
// var sub2 = prompt("enter yoour second subject");
// var sub3 = prompt("enter yoour third subject");
// var submark1 = +prompt("enter yoour first subject marks");
// var submark2 = +prompt("enter yoour second subject marks");
// var submark3 = +prompt("enter yoour third subject marks");
// var obtmark =+prompt ("enter obtained mark");
// document.write(`<table>
// <tr>
// <td>Subject</td><td>Total mark</td><td>Obatained mark</td> <td>Percentage<td>
// </tr>
// <tr>
// <td>english</td><td>100</td><td>75</td> <td>53%<td>
// </tr>
// <tr>
// <td>urdu</td><td>100</td><td>85</td> <td>56%<td>
// </tr>
// <tr>
// <td>Islamiat</td><td>100</td><td>85</td> <td>56%<td>
// </tr>
// </table>`);

//******************* chapter 9 -11*************************
// Q1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
// var city = prompt("enter your city");
// if(city === karachi){
//     document.write("welcome to city of lights");
// // }
// Q2. Write a program to take “gender” as input from user. If theuser is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
// var gender = prompt("enter your gender");
// var greeting;
//   if (gender == "male") {
//     greeting = "Good morning sir";
//   } else {
//     greeting = "Good morning maam";
//   }
//   document.write(greeting);
// // Q3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// var msg = prompt("enter your message");
// var a = "<table>
// <tr><td>signal color</td><td>Message</td></tr>
// <tr><td>Red</td><td>Must stop </td></tr>
// <tr><td>yellow </td><td>Ready to move</td></tr>
// <tr><td>green</td><td>Mobe now</td></tr>
// </table>;"
// document.getElementById("msg").innerHTML = a;
// 5. Run this script, & check whether alert message would bedisplayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");

// }
//  var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//         alert("condition 3 is true");
//     }
//     alert("condition 4 is true");
// }
//      var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     var totalCost = materialCost + laborCost;
//              alert("The cost equals");
//      if (true){
//         alert("True");
//      }
//      if (false){
//         alert("False");
//      }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
// }



//******************* chapter 11-13****************************
// Q1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
//     codes:- A=65, Z=90, a=97, z=122).
// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour =13; 

// if (hour < 18) {

//     greeting = "Good day";
//   }
//   else{
//     greeting = "good evening";
//   }





