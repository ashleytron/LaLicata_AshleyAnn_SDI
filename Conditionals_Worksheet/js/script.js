/**
 * Created by ashleyannlalicata on 4/23/15.Conditionals Worksheet
 */

//Group 1 - Celsius to Fahrenheit Converter
var userInput = prompt("Please enter the current temperature:"); //declare variable and request user input
var typeTemp = prompt("To convert temperature to Farenheit, enter 'F', to convert temperature to Celsius, enter 'C'"); //declare variable and request user input
var ftoC = (((userInput - 32) * 5)/9); //declare variable and assign calculation
var ctoF = (((userInput * 9)/5)+32); //declare variable and assign calculation
if (typeTemp === 'F') { //if else statement depending on what the user inputs
    console.log("The temperature is " + ctoF ," degrees Farenheit."); //output if the user chooses F
}else if(typeTemp === 'C'){ //else if user inputs C
    console.log("The temperature is " + ftoC ," degrees Celsius."); //output if user chooses C
}

//Group 2 - Grade Letter Calculator
var grade = prompt("What grade, in percent, did you receive?");
var aPlus = 95;
var aReg = 90;
var bPlus = 85;
var bReg = 80;
var cPlus = 76;
var cReg = 73;
var dReg = 70;
var fReg = 0;
if (grade >= aPlus){
    console.log("You have received an A+!");
}else if(aReg <= grade < aPlus){
    console.log("You have received an A!");
}else if(bPlus <= grade < aReg){
    console.log("You have recieved a B+!");
}else if(bReg <= grade <bPlus){
    console.log("You have recieved a B!");
}else if(cPlus <= grade < bReg){
    console.log("You have recieved a C+!");
}else if(cReg <= grade < cPlus){
    console.log("You have recieved a C!");
}else if(dReg <= grade < cReg) {
    console.log("You have received a D!");
}else if(fReg <= grade < dReg){
    console.log ("You have received and F!");
}