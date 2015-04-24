/**
 * Created by ashleyannlalicata on 4/23/15.Conditionals Worksheet
 */

//Group 1 - Celsius to Fahrenheit Converter
var userInput = prompt("Please enter the current temperature:");
var typeTemp = prompt("To convert temperature to Farenheit, enter 'F', to convert temperature to Celsius, enter 'C'");
var ftoC = (((userInput - 32) * 5)/9);
var ctoF = (((userInput * 9)/5)+32);
if (typeTemp === 'F') {
    console.log("The temperature is " + ctoF ," degrees Farenheit.");
}else if(typeTemp === 'C'){
    console.log("The temperature is " + ftoC ," degrees Celsius.");
}

//Group 2 - Grade Letter Calculator