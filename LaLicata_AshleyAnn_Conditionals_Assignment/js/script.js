/**
 * Created by ashleyannlalicata on 4/21/15. Conditionals Assignment
 */

var minPrice = prompt("Please enter the minimum amount you would like to spend on your new home (no commas):"); //Asks user for input on min amt spend
if(minPrice === "") { //if field is left blank
    alert("Oops! Please enter information");//alert if field is left blank
    minPrice = prompt("Please enter the minimum amount you would like to spend on your new home (no commas):");//restate prompt
}else console.log("Your minimum price is $" + minPrice); //Record input to console; //otherwise, print input to console

var maxPrice = prompt("Please enter the maximum amount you would like to spend on your new home (no commas:"); //Asks user for unput on maximum to spend
if(maxPrice === "") { //if field is left blank
    alert("Oops! Please enter information"); //alert if field is left blank
    maxPrice = prompt("Please enter the maximum amount you would like to spend on your new home: (no commas)");// restate prompt
}else console.log("Your maximum price is $" + maxPrice); //otherwise, print input to console

var renPrice = prompt("Please enter the amount you would like to spend on renovations: (no commas)"); //Asks user for input on amount to spend on renovations
if(renPrice === ""){ //if field is left blank
    alert("Oops! Please enter information"); //advise user to enter item
    renPrice = prompt("Please enter the amount you would like to spend on renovations:(no commas)"); //restate prompt
 }else console.log("Amount allocated to renovations is $" + renPrice); //otherwise, print input to console

var homePrice = prompt("Please enter the price of the home you desire: (no commas)"); //Asks user for input on price of desired home
if(homePrice === ""){ //if field is left blank
    alert("Oops! Please enter information"); //advise user to enter item
    homePrice = prompt("Please enter the price of the home you desire: (no commas)");//restate prompt
}else console.log("The price of the home you're interested in is $" + homePrice); //otherwise, print input to console

var fullPrice = +homePrice + +renPrice;
console.log("The full price of the home you desire is $" + fullPrice);
//if the price of the desired home + renovation is less than or equal to minimum, print to the console "Go ahead and buy!"

if(fullPrice <= maxPrice) { //If the homePrice is less than or equal to the MinimumPrice, advise to buy
    console.log("You are within your target. Go ahead and buy!"); //Print to console to buy
}else if(fullPrice > maxPrice){ //if not, advise over price limit and advise not to buy
    console.log("Do not buy, you are over your maximum price!"); //Print to console advise not to buy
    (fullPrice < maxPrice) ? console.log("Go ahead and buy!") : console.log("Do not buy, you are over your maximum price!"); //ternary conditional
if (fullPrice >= minPrice && fullPrice <= maxPrice) { //string concantation
    console.log("Go ahead and buy!")} //console output
}

/*Test 1 min amt: 100000 max amt: 500000 renovations: 25000 price of home: 300000 total price: 325000 Go ahead and buy!
Test 2 min amt: 250000 max amt: 600000 renovations: 65350 price of home: 70000 total price: 135350 Go ahead and buy!
Test 3 min amt: 400000 max amt: 800000 renovations: 300000 price of home: 1500000 total price:  */
