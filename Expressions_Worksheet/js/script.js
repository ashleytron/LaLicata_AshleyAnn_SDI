/**
 * Created by ashleyannlalicata on 4/16/15. Expressions Worksheet
 */

//Dog Years//
var sparkyAge = '5'; //decare variable for current age
console.log = sparkyAge;
var dogYears = sparkyAge * 7; //declare var for calculation
console.log = 'Sparky is ' + sparkyAge + 'human years old which is ' + dogYears + ' in dog years.'; //print results to console

//Slice of Pie Part 1//
var slicePie = 8; //declare var for slices per pie
var ppleParty = 64; //declare var for people at the party
var pies = 10; //declare var for number of pies ordered
var slicepPers = (slicePie * pies)/ppleParty;//variable for calculation for number of slices per person
console.log = 'Each person ate ' + slicepPers + 'slice of pizza at the party'; //print results to console

//Slice of Pie Part II//
var sparkySlice = (slicePie * pies)%ppleParty; //declare var calculation for remainder of slices after division of slicepPer
console.log = 'Sparky got ' + sparkySlice + 'slices of pizza.'; //print results to console

//Average Shopping Bill//
var shopCost = [100, 120,150,95,80];//create array for the 5 shopping trips
var shopTotal = shopCost[0] + shopCost[1] + shopCost[2] + shopCost[3] + shopCost[4];//calculation total of array's contents
var shopAvg = shopTotal/5;//calcultion of average of array's contents
console.log = 'You have spent a total $' + shopTotal + 'on groceries over 5 weeks. That is an average of $' + shopAvg + 'per week.';//print results to console

