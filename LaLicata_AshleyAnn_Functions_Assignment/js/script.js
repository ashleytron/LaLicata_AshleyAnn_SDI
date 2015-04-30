/**
 * Created by ashleyannlalicata on 4/30/15. Functions Assignment
 **/
    
var l = prompt("What is the length of the item in feet?");//asks user for input on the length of item
if(item === '') {//if field is left blank
    alert("Oops! Please enter information"); //alert if field is left blank
    l = prompt ("What is the length of the item?");//asks user for input on the length of the item
 }else console.log("The length of your item is " + l); //Otherwise print to console


calcCubic(l,w,h);
function calcCubic(l,w,h){
    var cubic = l * w * h;
    consol.log(cubic);

}
