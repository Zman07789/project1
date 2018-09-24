
/*
    Design the logic for a program for the River Falls Homes Construction Company. Design a program
    that prompts the user for a lot number in the River Falls subdivision, and data about the home to
    be built there including number of bedrooms, number of bathrooms, and size of garage in number of cars it holds.
    Output is the price of the home which is $50,000 base price plus $17,000 for each bedroom, $12,500 for each bathroom,
    and $6,000 for each car the garage holds. (Only needs to run once).
*/

/*
    Author: Zackary Paulson
*/

/*
this is section 1
*/

"use strict";
const PROMPT = require('readline-sync');

const COSTS =  {
    base: 50000,
    bed: 17000,
    bath: 12500,
    car: 6000,
};
/*this is section 2*/
let LOT = {
    lotNumber: 0 ,
    bedNumber: 0,
    bathNumber: 0,
    carNumber: 0,
    totalCost: 0,
};

/*this is section 3*/
function main(){
    LotNum();
    NumBeds();
    NumBaths();
    NumCars();
    totalCost();
    printResults();
}

main();
/*this is section 4*/
 function  LotNum(){
     LOT.lotNumber = Number(PROMPT.question(' Please Enter Number lot Number: '));
 }

 function NumBeds(){
     LOT.bedNumber = Number(PROMPT.question(' Please Enter The Number Of Beds You Would Like The House To Have: '));
 }

 function NumBaths(){
     LOT.bathNumber = Number(PROMPT.question(' Please Enter The Number Of Baths You Would Like The House To Have: '));
 }

 function NumCars(){
     LOT.carNumber = Number(PROMPT.question(' Please Enter The Number Of Cars You would Like To Fit In Your Garage:'));
 }

 function totalCost(){
     LOT.totalCost = COSTS.base + COSTS.bed * LOT.bedNumber + COSTS.bath * LOT.bathNumber + COSTS.car * LOT.carNumber;
 }

function printResults() {
    process.stdout.write('\x1Bc');
    console.log("\nHello, your lot Number is " + LOT.lotNumber + ", and your total estimated price is $" + LOT.totalCost);
}
