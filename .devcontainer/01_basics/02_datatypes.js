"use strict"//treat all JS code as newer version

//alert("not work") //because we are using node js ,not browser

console.log( 1 + 
    4 +
    3
); //not good practise ,code readability must be high
console.log("Here, We are want to knowing the datatypes");

/*
----to learn documentation
prefer mdn but it is not original documentation of JS. it make by mozilla org.
----original documentation get by
"tc39.es" ECMAScript
but for readability prefer mdn
*/

/*
DATATYPES----
----Primitive data types or inbuilt datatypes
--number or integer also us bigint for large numbers
--string => ""
--boolean => true/flase
--null => standalone value
--undefined 
--symbol => for prefer to make uniqueness
*/

//for knowing which type of data, use typeof
console.log(typeof "Vishal"); // return string 
console.log(typeof null); // return object 
console.log(typeof undefined); // return undefined