"use strict"; // treat all JS code as newer version

// alert(3+3) //we are using nodejs, not browser

console.log(3 + 3)

console.log("Umar")

let name = "Umar"
let age = 23
//let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false 
// null => standalone value
// undefined =>
// symbol =>unique

// object

//console.log(typeof "Umar") //string
console.log(typeof null); //object

//console.log(typeof undefined) //undefined

//primitive
//7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)


// Refrence (Non Primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Umar",
    age: 23, 
}

const myFunction = function() {
    console.log("Hello World");
}

//console.log(typeof outsideTemp);
console.log(typeof myFunction);