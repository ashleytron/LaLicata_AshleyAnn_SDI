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
