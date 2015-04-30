/**
 * Created by ashleyannlalicata on 4/30/15. Functions Assignment
 **/

alert("Welcome to our store! Please note that today's deals include 30% off of all shoes, 20% off of all bags, 15% off of all shirts!"); //alert user of the sales
var item1 = prompt("What is your first item? (Enter: S for shoes, B for bags, and T for shirts)"); //ask user input for type of item
if(item1 === '') { //if field is left blank
    alert("Oops! Please enter information"); //alert if field is left blank
    item1 = prompt ("What is your first item? (Enter: S for shoes, B for bags, and T for shirts)"); //restate prompt
 }else console.log()==