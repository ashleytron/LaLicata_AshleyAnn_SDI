/**
 * Created by ashleyannlalicata on 4/30/15. Functions Assignment
 **/

var l = prompt("What is the length of the item in feet?");//asks user for input on the length of item
if(l === '') {//if field is left blank
    alert("Oops! Please enter information"); //alert if field is left blank
    l = prompt ("What is the length of the item?");//asks user for input on the length of the item
 }else console.log("The length of your item is " + l); //Otherwise print to console

var w = prompt("What is the width of the item?");//asks user for input on the width of the item
if(w === '') {//if field is left blank
    alert("Oops! Please enter information"); //alert if field is left blank
    w = prompt ("What is the width of the item?");//asks user for input on the width of the item
 }else console.log("The width of your item is " + w); //Otherwise print to console

var h = prompt("What is the height of the item?");//asks user for input on the height of the item
if(h === '') {//if field is left blank
    alert("Oops! Please enter information");//alert if field is left blank
    h = prompt ("What is the height of the item?");//asks user for input on the height of the item
 }else console.log("The width of your item is " + h);//Otherwise print to console

var calcCubic = function(l,w,h); {//anonymous function
    var cubic = l * w * h; //calculation of variable
    return cubic; //function spitting info out
}
console.log("Your item is " + calcCubic + " cubic feet");

var c = calcCubic(l,w,h)
console.log(c);

