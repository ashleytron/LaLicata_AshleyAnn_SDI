/**
 * Created by ashleyannlalicata on 4/21/15. Conditionals Assignment
 */

var minPrice = prompt("Please enter the minimum amount you would like to spend on your new home"); //Asks user for input on min amt spend
console.log(minPrice);//output info
if(minPrice === 0) { //if field is left blank
    console.log("Oops! Please enter information" && prompt("Please enter the amount you would like to spend on your new home"));//advise user to enter item
}else console.log("Your minimum price is" + minPrice); //Record input to console; //otherwise, print input to console

var maxPrice = prompt("Please enter the maximum amount you would like to spend on your new home"); //Asks user for unput on maximum to spend
if(maxPrice = "0") { //if field is left blank
    console.log("Oops! Please enter information");//advise user to enter item
}else console.log(maxPrice); //otherwise, print input to console

var renPrice = prompt("Please enter the amount you would liek to spend on renovations:"); //Asks user for input on amount to spend on renovations
if(renPrice = "0"){ //if field is left blank
    console.log("Oops! Please enter information"); //advise user to enter item
 }else console.log(renPrice); //otherwise, print input to console

var homePrice = prompt("Please enter the price of the home you desire:"); //Asks user for input on price of desired home
if(homePrice = "0"){ //if field is left blank
    console.log("Oops! Please enter information"); //advise user to enter item
}else console.log(homePrice); //otherwise, print input to console

var fullPrice = homePrice + renPrice;


