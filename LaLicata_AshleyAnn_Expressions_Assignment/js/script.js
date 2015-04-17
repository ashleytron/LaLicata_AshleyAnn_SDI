/**
 * Created by ashleyannlalicata on 4/16/15 Expressions Assignment
 */
var maxSpend = prompt("Buy two pairs of shoes and receive 25% off your entire purchase! What is the maximum amount you would like to spend today?"); //Prompts total amount user would liek to spend and assigns variable
console.log(maxSpend); //output to console
var minSpend = prompt("What is the minimum amount you would like to spend?"); //Prompts minimum amount and assigns variable
console.log(minSpend); //output to console
var totMax = prompt("If you find something out of your price range, how much more are you willing to spend over your maximum amount?"); //prompts amount over maximum willing to spend and assigns variable
console.log(totMax); //output to console
var firstShoe = prompt("What is the price of the first shoe you would like to purchase?"); //Prompts user for information to utilize in calculation for first purchase, assign variable
console.log(firstShoe); //print output to console
var secondShoe = prompt("What is the price of the second shoe you would like to purchase?"); //Prompts user for information to utilize in calculation for second purchase, assign variable
console.log(secondShoe); //print output to console
var fullPrice= +firstShoe + +secondShoe; //Add both variables together and assign variable for FullPrice, use of addition
console.log(fullPrice); //print output to console
var discountPrice = fullPrice - (fullPrice * .25); //calculate discounted price and assign variable
console.log(discountPrice); //print results to console
var result = "The total price after discount is $" + discountPrice; //assign variable for result
alert(result); //alerts user to result and total price
var limits = [maxSpend, minSpend, totMax]; //Array of limits the customer has presented
var underAmt = limits[0] - discountPrice; //using array to calculate and create new variable for later use
console.log(underAmt); //print solution to console
var overAmt = discountPrice - limits[1]; //using array to calculate and create new var for later
console.log(overAmt); //print solution to console
var exceed = (+limits[2]+ +maxSpend) - +discountPrice; //use array to calc and create new var
console.log(exceed); //print solution to console
var savings = "You spend $" + underAmt + " less than your maximum that you wish to spend today, $" + overAmt + " more than your minimum desired amount and $" + exceed + " less than your total maximum."; //create variable for final savings calc
alert(savings); //alert user to total savings

/* test 1 - max = $250, min = $200, totMax = $50, 1st shoe = $75, 2nd shoe = $195, caculated price after disc $146.25, Calculated that I spent $103.75 less than my max, $-53.75 more than my min and $153.75 less than my total max */
/* test 2 - max = $300, min = $200, totMax = $100, 1st shoe = $100, 2nd shoe = $65, caculated price after disc $123.75, Calculated that I spent $176.25 less than my max, $-76.25 more than my min and $276.25 less than my total max */
/* test 3 - max = $500, min = $300, totMax = $150, 1st shoe = $150, 2nd shoe = $200, caculated price after disc $300, Calculated that I spent $200 less than my max, $0 more than my min and $350 less than my total max */





