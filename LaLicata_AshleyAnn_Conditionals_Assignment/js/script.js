/**
 * Created by ashleyannlalicata on 4/21/15. Conditionals Assignment
 */

var minPrice = prompt("Please enter the minimum amount you would like to spend on your new home"); //Asks user for input on min amt spend
console.log(minPrice);//output info
if(minPrice === "") { //if field is left blank
    console.log("Oops! Please enter information" && prompt("Please enter the amount you would like to spend on your new home"));//advise user to enter item
}else console.log("Your minimum price is" + minPrice); //Record input to console; //otherwise, print input to console

var maxPrice = prompt("Please enter the maximum amount you would like to spend on your new home"); //Asks user for unput on maximum to spend
console.log(maxPrice); //output info
if(maxPrice = "") { //if field is left blank
    console.log("Oops! Please enter information");//advise user to enter item
}else console.log(maxPrice); //otherwise, print input to console

var renPrice = prompt("Please enter the amount you would like to spend on renovations:"); //Asks user for input on amount to spend on renovations
console.log(renPrice);//output info
if(renPrice = ""){ //if field is left blank
    console.log("Oops! Please enter information"); //advise user to enter item
 }else console.log(renPrice); //otherwise, print input to console

var homePrice = prompt("Please enter the price of the home you desire:"); //Asks user for input on price of desired home
console.log(homePrice); //output info
if(homePrice = ""){ //if field is left blank
    console.log("Oops! Please enter information"); //advise user to enter item
}else console.log(homePrice); //otherwise, print input to console

var fullPrice = homePrice + renPrice;

//if the price of the desired home + renovation is less than or equal to minimum, print to the console "Go ahead and buy!"
if(homePrice + renPrice <= minPrice) { //If the homePrice is less than or equal to the MinimumPrice, advise to buy
    console.log("Go ahead and buy!"); //Print to console to buy
}else if(homePrice + renPrice > maxPrice){ //if not, advise over price limit and advise not to buy
    console.log("Do not buy, you are over your maximum price"); //Print to console advise not to buy
    (homePrice + renPrice <= maxPrice) ? console.log("Go ahead and buy!") : console.log("Do not buy!"); //ternary conditional
if (fullPrice >= minPrice && fullPrice <= maxPrice) { //string concatation
    console.log("Go ahead and buy!")} //console output
}



